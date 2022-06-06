import styled, { css } from 'styled-components';

interface InputContainerProps {
  isAlignRight?: boolean;
}

const StyledInputContainer = styled.div<InputContainerProps>`
  width: 100%;

  :not(:last-child) {
    margin-bottom: 10px;
  }

  ${props =>
    props.isAlignRight && css`
      display: flex;
      justify-content: flex-end;
    `
  }
`;

export default StyledInputContainer;
