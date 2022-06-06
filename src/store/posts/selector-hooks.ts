import { useAppSelector } from '../hooks';
import { selectPosts } from './state';

export const usePosts = () => useAppSelector(selectPosts);
