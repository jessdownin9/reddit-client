import { createSlice } from "@reduxjs/toolkit";

export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState: {
        subreddit: 'popular'
    },
    reducers: {
        setSubreddit: (state, action) => {
            state.subreddit = action.payload;
        }
    }
});

export const selectSubreddit = (state) => state.sidebar.subreddit;

export const { setSubreddit } = sidebarSlice.actions;
export default sidebarSlice.reducer;