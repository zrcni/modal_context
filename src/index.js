import React from "react";
import ReactDOM from "react-dom";

import Main from "./containers/Main";
import ModalContainer from "./containers/ModalContainer";

import { ModalProvider } from "./ModalContext";

import "./styles.css";

export const App = () => (
  <ModalProvider>
    <Main />
    <ModalContainer />
  </ModalProvider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
