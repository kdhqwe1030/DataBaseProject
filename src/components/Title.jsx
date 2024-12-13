import React from 'react';
import styled from 'styled-components';

import IndexIcon1 from '../assets/IndexIcon1.png';
import IndexIcon2 from '../assets/IndexIcon2.png';
import { CheckButton } from './Button';
export const Title1 = ({ text, SearchClick }) => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Icon1 src={IndexIcon1} />
        <TitleText>{text}</TitleText>
      </TitleWrapper>
      <CheckButton onClick={SearchClick}></CheckButton>
    </Wrapper>
  );
};

export const Title2 = ({ text }) => {
  return (
    <TitleWrapper>
      <Icon2 src={IndexIcon2} />
      <TitleText>{text}</TitleText>
    </TitleWrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
`;
const Icon1 = styled.img`
  width: 20px;
  height: 20px;
`;
const Icon2 = styled.img`
  width: 20 px;
  height: 16px;
`;
const TitleText = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #242526;
`;
