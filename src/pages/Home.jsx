import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import List from '../components/List';
import Select from '../components/Select';
import MainScreen from '../assets/MainScreen.png';

const Home = () => {
  return (
    <BaseContainer>
      <Header></Header>
      <ContentWrapper>
        <List></List>
        <ListExceptContainer>
          <Select></Select>
          <Content $MainScreen={MainScreen}></Content>
        </ListExceptContainer>
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

const Content = styled.div`
  background-image: url(${({ $MainScreen }) => $MainScreen});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
`;

const ListExceptContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
