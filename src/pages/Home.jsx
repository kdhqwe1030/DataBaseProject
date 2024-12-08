import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import List from '../components/List';
const Home = () => {
  return (
    <BaseContainer>
      <Header></Header>
      <ContentWrapper>
        <List></List>
      </ContentWrapper>
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
  height: calc(100vh - 66px);
  width: 100%;
`;
