import React from 'react';
import styled from 'styled-components';
import MainScreen from '../assets/MainScreen.png';

const Home = () => {
  return <Content $MainScreen={MainScreen}></Content>;
};

export default Home;
const Content = styled.div`
  background-image: url(${({ $MainScreen }) => $MainScreen});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
`;
