import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
`;

const Button = ({ onClick }) => {
  return <StyledButton onClick={onClick}>Sign out</StyledButton>;
};

export default Button;
