import React, { memo } from 'react';

import { Outlet } from 'react-router-dom';

import Header from '../header';

import StyledLayout from './styled-layout';
import Title from './components/title';

function Layout() {
  return (
    <StyledLayout>
      <Title>Posts management</Title>
      <Header />
      <Outlet />
    </StyledLayout>
  );
}

export default memo(Layout);
