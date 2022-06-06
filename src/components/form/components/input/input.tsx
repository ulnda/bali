import React, { memo, FormEvent, useCallback } from 'react';

import StyledFormInput from './styled-input';

interface InputProps {
  value: string;
  title: string;
  onChange: (value: string) => void;
}

function Input({ value, onChange, title }: InputProps) {
  const change = useCallback((event: FormEvent<HTMLInputElement>) => {
    onChange(event.currentTarget.value);
  }, [onChange]);

  return (
    <StyledFormInput>
      <label htmlFor={title}>{title}:</label>
      <input id={title} className="form__input-field" type="text" value={value} onChange={change} />
    </StyledFormInput>
  );
}

export default memo(Input);
