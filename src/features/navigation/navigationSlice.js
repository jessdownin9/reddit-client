import { createSlice } from "@reduxjs/toolkit";

export const navigationSlice = createSlice({
    name: 'navigation',
    initialState: {
        searchTerm: null
    },
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        }
    }
});

export const selectSearchTerm = (state) => state.navigation.searchTerm;

export const { setSearchTerm } = navigationSlice.actions;
export default navigationSlice.reducer;