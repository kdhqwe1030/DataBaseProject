import styled from 'styled-components';
import Home from './pages/Home';

function App() {
  return (
    <BaseContainer>
      <Home></Home>
    </BaseContainer>
  );
}

export default App;
const BaseContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;
