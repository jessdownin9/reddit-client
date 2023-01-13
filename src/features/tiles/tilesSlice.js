import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk('tiles/fetchPosts', 
    async (subreddit) => {
        const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
        const jsonResponse = await response.json();
        const posts = jsonResponse.data.children.map(element => element.data);
        return posts;
    }
);

export const fetchSearchTerm = createAsyncThunk('tiles/fetchSearchTerm', 
    async (searchTerm) => {
        const response = await fetch(`https://www.reddit.com/search.json?q=${searchTerm}`);
        const jsonResponse = await response.json();
        const posts = jsonResponse.data.children.map(element => element.data);
        return posts;
    }
);

export const tilesSlice = createSlice({
    name: 'tiles',
    initialState: {
        posts: [],
        isLoading: false,
        hasError: false,
        loaded: false
    },
    extraReducers: {
        [fetchPosts.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.posts = [];
            state.posts.push(action.payload);
            state.isLoading = false;
            state.hasError = false;
            state.loaded = true;
        },
        [fetchPosts.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        },
        [fetchSearchTerm.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [fetchSearchTerm.fulfilled]: (state, action) => {
            state.posts = [];
            state.posts.push(action.payload);
            state.isLoading = false;
            state.hasError = false;
            state.loaded = true;
        },
        [fetchSearchTerm.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
});

export const selectPosts = (state) => state.tiles.posts;
export const isLoading = (state) => state.tiles.isLoading;
export const hasError = (state) => state.tiles.hasError;
export const selectLoaded = (state) => state.tiles.loaded;

export default tilesSlice.reducer;