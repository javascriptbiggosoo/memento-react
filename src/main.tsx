import React from "react";
import ReactDOM from "react-dom/client";

import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Normalize } from "styled-normalize";

import "./index.css";
import App from "./App";
import GlobalStyle from "./GlobalStyle";

const client = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <RecoilRoot>
    <QueryClientProvider client={client}>
      <Normalize />
      <GlobalStyle />
      <App />
    </QueryClientProvider>
  </RecoilRoot>
);
