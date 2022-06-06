import React, { memo, Children } from 'react';

import StyledList from './styled-list';

interface ListProps {
  children: React.ReactNode;
}

function List({ children }: ListProps) {
  const isEmpty = Children.count(children) === 0;

  return (
    <div className="list">
      {!isEmpty && (
        <StyledList className="list">{children}</StyledList>
      )}
      {isEmpty && (
        <span className="list__placeholder">There are no items</span>
      )}
    </div>
  );
}

export default memo(List);
