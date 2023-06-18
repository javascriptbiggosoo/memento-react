import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RecoilRoot } from "recoil";
import { Normalize } from "styled-normalize";
import { createGlobalStyle } from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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

const client = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RecoilRoot>
    <QueryClientProvider client={client}>
      <Normalize />
      <GlobalStyle />
      <App />
    </QueryClientProvider>
  </RecoilRoot>
);
