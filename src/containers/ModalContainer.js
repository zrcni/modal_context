import React, { Fragment } from "react";
import Modal from "react-modal";

import { ModalConsumer } from "../ModalContext";

Modal.setAppElement("#root");

const style = () => ({
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
});

export const ModalContainer = () => (
  <ModalConsumer>
    {({ components, closeModal }) => {
      const topComponent = components[0];
      if (!topComponent) return null;

      const { component, modalProps } = topComponent;
      const { modalId, modalButtons = [], disableAutoClose } = modalProps;

      return (
        <Modal
          isOpen
          style={style()}
          onClose={() => closeModal(modalId)}
          onRequestClose={() => !disableAutoClose && closeModal(modalId)}
        >
          <div style={{ padding: 8 }}>
            {component(modalProps)}
            {modalButtons.map(modalButton => (
              <Fragment key={new Date().getTime()}>
                {modalButton(modalProps)}
              </Fragment>
            ))}
          </div>
        </Modal>
      );
    }}
  </ModalConsumer>
);

export default ModalContainer;
