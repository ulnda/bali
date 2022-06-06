import styled, { css } from 'styled-components';

type PostsItemColumnType = 'number' | 'main' | 'button';

const ITEM_WIDTH_VALUES: Record<PostsItemColumnType, string> = {
  number: '10%',
  main: '70%',
  button: '20%',
};

interface StyledPostsItemProps {
  type: PostsItemColumnType
}

const StyledPostsItemColumn = styled.div<StyledPostsItemProps>`
  width: ${props => ITEM_WIDTH_VALUES[props.type]};
  height: 100%;
  display: flex;
    align-items: center;

  ${props => props.type === 'button' && css`
    justify-content: flex-end;
  `}

  ${props => props.type === 'number' && css`
    font-weight: bold;
  `}
`;

export default StyledPostsItemColumn;
