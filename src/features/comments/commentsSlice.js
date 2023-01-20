import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchComments = createAsyncThunk('comments/fetchComments',
    async ({ subreddit, id }) => {
        const response = await fetch(`https://www.reddit.com/${subreddit}/comments/${id}.json`);
        const jsonResponse = await response.json();
        const comments = await jsonResponse[1].data.children.map(element => element.data);
        return comments;
    }
);

export const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: [],
        isLoading: false,
        hasError: false,
        loaded: false
    },
    extraReducers: {
        [fetchComments.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [fetchComments.fulfilled]: (state, action) => {
            state.comments = [];
            state.comments.push(action.payload);
            state.isLoading = false;
            state.hasError = false;
            state.loaded = true;
        },
        [fetchComments.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
});

export const selectComments = (state) => state.comments.comments
export const isLoading = (state) => state.comments.isLoading;
export const hasError = (state) => state.comments.hasError;
export const selectLoaded = (state) => state.comments.loaded;

export default commentsSlice.reducer;