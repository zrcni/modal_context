import React from "react";

import Two from "./Two";

import { ModalConsumer } from "../ModalContext";

export const One = ({ text, modalId }) => (
  <div>
    <h3>{text}</h3>
    <ModalConsumer>
      {({ openModal, closeModal }) => (
        <div>
          <button
            onClick={() => {
              openModal(modalProps => <Two text="Wheeee" {...modalProps} />, {
                modalButtons: [
                  ({ modalId }) => (
                    <button onClick={() => closeModal(modalId)}>Bye!</button>
                  )
                ]
              });
              closeModal(modalId);
            }}
          >
            Ok
          </button>
        </div>
      )}
    </ModalConsumer>
  </div>
);

export default One;
