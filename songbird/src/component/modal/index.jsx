import React, { Component } from "react";

import PropTypes from 'prop-types';


import { Button, Modal } from "react-bootstrap";
import "./styles.scss";

class ModalResult extends Component {
  static propTypes = {
    result: PropTypes.number,
    maxResult: PropTypes.number,
    showModal: PropTypes.bool,
    onClick: PropTypes.func,
  };

  handleClose = () => {
    if (typeof this.props.onClick === 'function') {
      return this.props.onClick(false);
    }
  }
  handleShow = () => {
    if (typeof this.props.onClick === 'function') {
      return this.props.onClick(true);
    }
  }

  render() {
    const {
      result, maxResult, showModal
    } = this.props;

    return (
      <Modal show={showModal} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Результат</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Вы набрали {result} баллов из {maxResult} возможных.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Пройти еще раз
          </Button>
          <Button variant="primary" onClick={this.handleClose}>
            Ок
          </Button>
        </Modal.Footer>
      </Modal>

    );
  }
}

export default ModalResult;
