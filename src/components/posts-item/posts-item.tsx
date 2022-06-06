import React, { memo, useCallback, MouseEvent } from 'react';
import { Post } from '../../types/posts';

import StyledPostsItem from './styled-posts-item';
import PostsItemColumn from './components/posts-item-column';

interface PostsItemProps {
  item: Post;
  onRemove: (id: number) => void;
}

function PostsItem({ onRemove, item: { title, id } }: PostsItemProps) {
  const removeItem = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    onRemove(id);
  }, [id, onRemove]);

  return (
    <StyledPostsItem>
      <PostsItemColumn type="number">{id}</PostsItemColumn>
      <PostsItemColumn type="main">{title}</PostsItemColumn>
      <PostsItemColumn type="button"><button onClick={removeItem}>Удалить</button></PostsItemColumn>
    </StyledPostsItem>
  );
}

export default memo(PostsItem);
