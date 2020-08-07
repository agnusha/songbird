import React, { Component } from "react";

import PropTypes from 'prop-types';


import { Button, Modal } from "react-bootstrap";
import "./styles.scss";

class ModalResult extends Component {
  static propTypes = {
    result: PropTypes.number,
    show: PropTypes.bool,
  };

  constructor(props) {
    super(props);
    this.state = {
      show: props.show,
    };
  };

  handleClose = () => {
    this.setState({ show: false });
  }

  handleShow = () => {
    this.setState({ show: true });
  }

  render() {
    const {
      show
    } = this.state;


    return (
      <>
        <Button variant="primary" onClick={this.handleShow}>
          Launch modal
      </Button>

        <Modal show={show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
          </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
          </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default ModalResult;
