import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import List from './components/List';
import Select from './components/Select';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <BrowserRouter>
      <BaseContainer>
        <Header></Header>
        <ContentWrapper>
          <List></List>
          <ListExceptContainer>
            <Select></Select>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </ListExceptContainer>
        </ContentWrapper>
      </BaseContainer>
    </BrowserRouter>
  );
};

export default App;
const BaseContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const ContentWrapper = styled.div`
  display: flex;
  height: calc(100vh - 66px);
  width: 100%;
`;

const ListExceptContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
