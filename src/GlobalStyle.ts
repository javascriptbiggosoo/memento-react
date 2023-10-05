import { createGlobalStyle } from "styled-components";

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

export default GlobalStyle;
