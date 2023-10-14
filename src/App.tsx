import styled from "styled-components";

import Bottom from "./components/Layout/Bottom";
import Center from "./components/Layout/Center";
import Top from "./components/Layout/Top";
import bgImg from "./assets/background-img/qhd/tony-lee-i_XLLP08BOc-unsplash.jpg";

const Container = styled.div`
  padding: 8px;
  height: 100vh;
  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)),
    url(${bgImg});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
`;

function App() {
  return (
    <Container className="App">
      <Top />
      <Center />
      <Bottom />
    </Container>
  );
}

export default App;
