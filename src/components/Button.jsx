import React, { useState } from 'react';
import styled from 'styled-components';

export const CheckButton = ({ onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <CheckButtonContainer
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      $isHovered={isHovered}
    >
      <SearchIcon src="https://eisn.cbnu.ac.kr/nxui/_resource_/_theme_/default/images/btn_TF_search.png?nexaversion=0" />
      <CheckText $isHovered={isHovered}>조회</CheckText>
    </CheckButtonContainer>
  );
};

const CheckButtonContainer = styled.button`
  background-color: #ba3158;
  display: flex;
  gap: 6px;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 5px;
  width: 80px;
  height: 30px;
  &:hover {
    background-color: white;
  }
`;

const SearchIcon = styled.img`
  width: 14px;
  height: 14px;
  position: relative;
  vertical-align: middle;
  background-position: center center;
  background-repeat: no-repeat;
`;

const CheckText = styled.div`
  font-size: 14px;
  color: ${({ $isHovered }) => ($isHovered ? '#ba3158' : '#fff')};
  font-weight: bold;
`;
