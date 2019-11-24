import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

import assets from '../../assets';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledCheckbox = styled.input`
  width: 16px;
  height: 16px;
  background: #fff;
  background-position: center -100%;
  border-radius: 4px;
  cursor: pointer;
  appearance: none;
  outline: none;
  transition: background 0.2s;
  &:checked {
    background: #449746 url(${assets.img.tick}) center center no-repeat;
    background-size: 70%;
  }
`;

const Label = styled.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
  margin-left: 5px;
`;

const Checkbox = ({ className, label, input: { onChange } }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = useCallback(() => {
    setIsChecked(!isChecked);
    onChange(!isChecked);
  }, [onChange, isChecked]);
  return (
    <Wrapper className={className}>
      <StyledCheckbox
        onChange={handleChange}
        checked={isChecked}
        type="checkbox"
      />
      <Label>{label}</Label>
    </Wrapper>
  );
};

export default Checkbox;
