import React, { memo } from 'react';

import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';

import Posts from '../../views/posts';
import NewPost from '../../views/new-post';
import Layout from '../layout';
 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/posts" replace={true} />}/>
          <Route path="/posts">
            <Route index element={<Posts />} />
            <Route path="new" element={<NewPost />} />
          </Route>
          <Route path="*" element={<Navigate to="/posts" replace={true} />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default memo(App);
