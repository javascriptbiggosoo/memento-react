import styled, { createGlobalStyle } from "styled-components";
import bgImg from "./assets/background-img/qhd/tony-lee-i_XLLP08BOc-unsplash.jpg";
import Bottom from "./components/layout/Bottom";
import Center from "./components/layout/Center";
import Top from "./components/layout/Top";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  
  font-size: 1.1em;
}
html {
  font-size: 16px;
}
li{
  list-style: none;
}
body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
a {
  text-decoration: none;
  color: inherit;
}

input,
input:focus {
  outline: none;
  border: none;
  background-color: inherit;
}

input {
  border-bottom: grey 1.3px solid;
  transition: 0.3s;
  color: inherit;
}

input:focus {
  border-bottom: greenyellow 1.3px solid;
}

input::placeholder {
  color: rgba(255, 255, 255, 0.8);
}

.centered {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
`;

const AppContainer = styled.div`
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
      <GlobalStyle></GlobalStyle>
      <AppContainer className="App">
        <Top></Top>
        <Center></Center>
        <Bottom></Bottom>
      </AppContainer>
    </>
  );
}

export default App;
