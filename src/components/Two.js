import React from "react";

import { ModalConsumer } from "../ModalContext";

export const Two = ({ text }) => (
  <div>
    <h3>{text}</h3>
    <ModalConsumer>
      {({ openModal, closeModal }) => (
        <div>
          <button
            onClick={() => {
              openModal(modalProps => <h3>stop</h3>, {
                modalButtons: [
                  ({ modalId }) => (
                    <button onClick={() => closeModal(modalId)}>pls no</button>
                  )
                ]
              });
            }}
          >
            Oh yeah!
          </button>
        </div>
      )}
    </ModalConsumer>
  </div>
);

export default Two;
