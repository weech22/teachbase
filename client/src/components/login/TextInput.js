import React, { useCallback, useMemo } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.span`
  padding-left: 15px;
  text-transform: uppercase;

  font-size: 12px;
  color: ${({ isError }) => (isError ? '#ff5555' : 'rgba(255, 255, 255, 0.6)')};
`;

const Input = styled.input`
  caret-color: rgba(255, 255, 255, 0.7);
  color: rgba(255, 255, 255, 0.9);
  background-color: ${({ isError }) =>
    isError ? 'rgba(245, 85, 85, 0.6)' : 'rgba(255, 255, 255, 0.2)'};
  padding: 6px 15px 8px 15px;
  outline: none;
  border: none;
  border-radius: 20px;
  &:focus {
    background-color: ${({ isError }) =>
      isError ? 'rgba(245, 85, 85, 0.6)' : 'rgba(255, 255, 255, 0.4)'};
  }
  transition: background-color 0.4s;
`;

const Error = styled.span`
  font-size: 12px;
  padding-left: 3px;
  color: ${({ isError }) => (isError ? '#ff5555' : 'transparent')};
`;

const LabelBlock = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
`;

const TextInput = ({
  label,
  type,
  input: { onChange },
  meta: { touched, error },
}) => {
  const handleChange = useCallback(
    ({ target: { value } }) => {
      onChange(value);
    },
    [onChange],
  );

  const isError = useMemo(() => error && touched, [error, touched]);

  return (
    <Wrapper>
      <LabelBlock>
        <Label isError={isError}>{label}</Label>
        <Error isError={isError}>{error || 'Ooops!'}</Error>
      </LabelBlock>
      <Input type={type} onChange={handleChange} isError={isError} />
    </Wrapper>
  );
};

export default TextInput;
