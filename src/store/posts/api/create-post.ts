import axios from 'axios';
import { Post } from '../../../types/posts';
import { BASE_API_URL } from '../../contants';

export default async function createPost(post: Pick<Post, 'title'>) {
  const response = await axios.post<Post[]>(`${BASE_API_URL}/posts`, post);

  return response.data;
}
