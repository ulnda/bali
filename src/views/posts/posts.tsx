import React, { memo, useCallback, useEffect, useState } from 'react';

import { usePosts, getPosts, removePosts, useAppDispatch } from '../../store';

import List from '../../components/list';
import ListItem from '../../components/list/components/list-item';

import PostsItem from '../../components/posts-item';

import Pagination from '../../components/pagination';
import { Post } from '../../types/posts';

import SubTitle from '../../components/sub-title';
import Error from '../../components/error';

function Posts() {
  const { items, status } = usePosts();

  const [postsPerPage, setPostsPerPage] = useState<Post[]>([]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const changeItems = useCallback((page: number, itemsPerPage: number) => {
    const startItem = page * itemsPerPage;

    setPostsPerPage(items.slice(startItem, startItem + itemsPerPage));
  }, [items]);

  return (
    <>
      <SubTitle>Posts</SubTitle>
      {status === 'loading' && 'Loading...'}
      {status === 'idle' && !!items.length && <Pagination items={items} onPageChange={changeItems}/>}
      {status === 'idle' && (
        <List>
          {postsPerPage.map(item => (
            <ListItem key={item.id}>
              <PostsItem item={item} onRemove={(id) => dispatch(removePosts(id))} />
            </ListItem>
          ))}
        </List>
      )}
      {status === 'failed' && <Error>Loading has been failed. Please, try again later.</Error>}
    </>
  );
}

export default memo(Posts);
