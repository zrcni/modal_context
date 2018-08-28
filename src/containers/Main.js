import React from "react";

import ModalContainer from "./ModalContainer";
import One from "../components/One";

import { ModalConsumer } from "../ModalContext";

const Main = () => (
  <div className="App">
    <h1>Modal in Context</h1>
    <ModalConsumer>
      {({ openModal, closeModal }) => (
        <div>
          <button
            onClick={() => {
              openModal(
                modalProps => (
                  <One text="How about a second modal?" {...modalProps} />
                ),
                {
                  disableAutoClose: true
                }
              );
            }}
          >
            Open Modal
          </button>
        </div>
      )}
    </ModalConsumer>
  </div>
);

export default Main;
