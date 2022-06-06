import axios from 'axios';
import { Post } from '../../../types/posts';
import { BASE_API_URL } from '../../contants';

export default async function fetchPosts() {
  const response = await axios.get<Post[]>(`${BASE_API_URL}/posts`);

  return response.data;
}
