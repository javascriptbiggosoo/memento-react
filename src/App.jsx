import styled from "styled-components";
import bgImg from "./assets/background-img/qhd/tony-lee-i_XLLP08BOc-unsplash.jpg";
import Bottom from "./components/layout/Bottom";
import Center from "./components/layout/Center";
import Top from "./components/layout/Top";

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
    <>
      <Container className="App">
        <Top></Top>
        <Center></Center>
        <Bottom></Bottom>
      </Container>
    </>
  );
}

export default App;
