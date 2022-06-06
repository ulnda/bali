import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import postsReducer from './posts';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export { usePosts, getPosts, removePosts, addPost } from './posts';

export { useAppDispatch } from './hooks'; 
