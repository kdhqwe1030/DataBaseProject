import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
const Home = () => {
  return (
    <BaseContainer>
      <Header></Header>
      <ContentWrapper></ContentWrapper>
    </BaseContainer>
  );
};

export default Home;

const BaseContainer = styled.div`
  width: 100%;
  height: 100%;
`;
const ContentWrapper = styled.div`
  display: flex;
`;
