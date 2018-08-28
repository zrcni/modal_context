import React, { Component, createContext } from "react";

const getDisplayName = WrappedComponent => {
  return (
    WrappedComponent.displayName || WrappedComponent.name || "WrappedComponent"
  );
};

const generateId = () =>
  Math.random()
    .toString(36)
    .substr(2, 7);

const { Provider, Consumer } = createContext({
  components: [],
  openModal: () => {},
  closeModal: () => {}
});

export const ModalConsumer = Consumer;

export const withModal = WrappedComponent => {
  const ModalConsumerHoC = props => {
    return (
      <ModalConsumer>
        {context => <WrappedComponent {...context} {...props} />}
      </ModalConsumer>
    );
  };
  ModalConsumerHoC.displayName = `withModal(${getDisplayName(
    WrappedComponent
  )})`;
  return ModalConsumerHoC;
};

export class ModalProvider extends Component {
  openModal = (component, modalProps = {}) => {
    const modalId = generateId();
    this.setState(state => ({
      components: [
        { component, modalProps: { ...modalProps, modalId } },
        ...state.components
      ]
    }));
  };

  closeModal = modalId => {
    if (modalId) {
      this.setState(state => ({
        components: state.components.filter(
          c => c.modalProps.modalId !== modalId
        )
      }));
    } else {
      this.setState({
        components: []
      });
    }
  };

  state = {
    components: [],
    openModal: this.openModal,
    closeModal: this.closeModal
  };

  render() {
    const { children } = this.props;
    return <Provider value={this.state}>{children}</Provider>;
  }
}
