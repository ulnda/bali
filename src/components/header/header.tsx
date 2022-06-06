import React, { memo } from 'react';

import { Link } from 'react-router-dom';

import StyledHeader from './styled-header';
import HeaderItem from './components/header-item';

function Header() {
  return (
    <StyledHeader>
      <HeaderItem><Link to="/posts">All</Link></HeaderItem>
      <HeaderItem><Link to="/posts/new">New</Link></HeaderItem>
    </StyledHeader>
  );
}

export default memo(Header);
