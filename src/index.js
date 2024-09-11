import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./theme";
import { ThemeProvider } from "@mui/material";
// import styled from "@emotion/styled/macro";
// const GlobalStyle = styled.CreateGlobalStyle`
//   body {
//     margin: 0;
//     padding: 0;
//   }
// `;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* <GlobalStyle></GlobalStyle> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
reportWebVitals();
