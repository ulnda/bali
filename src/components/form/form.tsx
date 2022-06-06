import React, { FormEvent, memo, useCallback } from 'react';

import StyledForm from './styled-form';
import InputContainer from './components/input-container';

interface FormProps {
  children: React.ReactNode;
  onSubmit: () => void;
  isDisabled?: boolean;
}

function Form({ children, onSubmit, isDisabled }: FormProps) {
  const submit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit();
  }, [onSubmit]);

  return (
   <StyledForm onSubmit={submit}>
     {children}
    <InputContainer isAlignRight>
      <button disabled={isDisabled} type="submit">Create</button>
    </InputContainer>
   </StyledForm>
  );
}

export default memo(Form);
