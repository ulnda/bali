import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import fetchPosts from './api/fetch-posts';
import createPost from './api/create-post';
import { Post } from '../../types/posts';

export interface PostsState {
  items: Post[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: PostsState = {
  items: [],
  status: 'idle',
};

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async () => {
    const response = await fetchPosts();

    return response;
  }
);

export const addPost = createAsyncThunk(
  'posts/addPost',
  async (title: string) => {
    await createPost({ title });

    window.location.href = '/posts';
  }
);

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    removePosts: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items = action.payload;
      })
      .addCase(getPosts.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(addPost.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addPost.fulfilled, (state) => {
        state.status = 'idle';
      })
      .addCase(addPost.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const selectPosts = (state: RootState) => state.posts;

export const { removePosts } = postsSlice.actions;

export default postsSlice.reducer;
