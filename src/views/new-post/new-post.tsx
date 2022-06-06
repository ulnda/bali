import React, { memo, useCallback, useState } from 'react';

import { useAppDispatch, addPost, usePosts } from '../../store';

import Form from '../../components/form';
import Input from '../../components/form/components/input';
import InputContainer from '../../components/form/components/input-container';

import SubTitle from '../../components/sub-title';

import Error from '../../components/error';

function NewPost() {
  const [title, setTitle] = useState('');

  const { status } = usePosts();

  const dispatch = useAppDispatch();

  const submit = useCallback(() => {
    dispatch(addPost(title));
  }, [dispatch, title]);

  return (
    <>
      <SubTitle>New Post</SubTitle>
      <Form onSubmit={submit} isDisabled={!title || status === 'loading'}>
        <InputContainer>
          <Input title={'Title'} value={title} onChange={setTitle}/>
        </InputContainer>
      </Form>
      {status === 'failed' && <Error>Creating has been failed. Please, try again later.</Error>}
    </>
  );
}

export default memo(NewPost);
