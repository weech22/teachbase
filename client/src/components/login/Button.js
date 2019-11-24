import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 8px;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 20px;
  background: rgb(68, 151, 70);
  color: #fff;
  text-transform: uppercase;
  font-size: 12px;
  &:hover {
    background: rgba(54, 112, 54);
  }
  &:disabled {
    background: rgb(68, 151, 70);
    cursor: auto;
  }
  transition: background 0.3s;
`;

const Button = ({ children, onClick, disabled }) => (
  <StyledButton type="button" disabled={disabled} onClick={onClick}>
    {children}
  </StyledButton>
);

export default Button;
