import React, { memo, useState, useMemo, useCallback, useEffect } from 'react';
import Select from 'react-select'

import { Post } from '../../types/posts';

import StyledPagination from './styled-pagination';
import PaginationCountLabel from './components/pagination-count-label';

interface PaginationProps {
  items: Post[];
  onPageChange: (page: number, itemsPerPage: number) => void;
}

const ITEMS_PER_PAGE_OPTIONS = [10, 20, 50].map(item => ({
  value: item,
  label: `${item} items`,
}));

function Pagination({ items, onPageChange }: PaginationProps) {
  const [itemsPerPageOption, setItemsPerPageOption] = useState(ITEMS_PER_PAGE_OPTIONS[0]);

  const pagesOptions = useMemo(() => {
    const pagesCount = Math.ceil(items.length / itemsPerPageOption.value);

    return new Array(pagesCount).fill(0).map((_, index) => {
      return {
        value: index,
        label: `Page ${index + 1}`,
      };
    });
  }, [items.length, itemsPerPageOption.value]);

  const [pageOption, setPageOption] = useState(pagesOptions[0]);

  useEffect(() => {
    setPageOption(pagesOptions[0]);
    onPageChange(pagesOptions[0].value, itemsPerPageOption.value);
  }, [itemsPerPageOption.value, onPageChange, pagesOptions]);

  const changeItemsPerPageOption = useCallback((itemsPerPageOption: any) => {
    setItemsPerPageOption(itemsPerPageOption);
  }, []);

  const changePageOption = useCallback((pageOption: any) => {
    setPageOption(pageOption);
    onPageChange(pageOption.value, itemsPerPageOption.value);
  }, [itemsPerPageOption.value, onPageChange]);

  return (
    <StyledPagination>
      <div>Items count: <PaginationCountLabel>{items.length}</PaginationCountLabel></div>
      <Select
        value={itemsPerPageOption}
        options={ITEMS_PER_PAGE_OPTIONS}
        onChange={changeItemsPerPageOption}
      />
      <Select
        value={pageOption}
        options={pagesOptions}
        onChange={changePageOption}
      />
    </StyledPagination>
  );
}

export default memo(Pagination);
