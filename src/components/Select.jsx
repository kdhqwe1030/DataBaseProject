import React from 'react';
import styled from 'styled-components';
import Home from '../assets/Home.png';
import windowEtc from '../assets/windowEtc.png';

const Select = () => {
  return (
    <BaseContainer>
      <HomeIcon src={Home} />
      <MainSelectWrapper></MainSelectWrapper>
      <WindowIcon src={windowEtc} />
    </BaseContainer>
  );
};

export default Select;

const BaseContainer = styled.div`
  width: 100%;
  height: 44px;
  border-bottom: 1px solid #c7c9cf;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
`;
const MainSelectWrapper = styled.div`
  flex-grow: 1;
`;
const HomeIcon = styled.img`
  height: 16px;
`;
const WindowIcon = styled.img`
  width: 120px;
`;
