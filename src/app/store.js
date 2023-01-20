import { configureStore } from '@reduxjs/toolkit';
import navigationSlice from '../features/navigation/navigationSlice.js';
import sidebarReducer from '../features/sidebar/sidebarSlice.js';
import tilesReducer from '../features/tiles/tilesSlice.js';
import commentsSlice from '../features/comments/commentsSlice.js';

export const store = configureStore({
  reducer: {
    tiles: tilesReducer,
    sidebar: sidebarReducer,
    navigation: navigationSlice,
    comments: commentsSlice
  },
});
