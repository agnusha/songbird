import React, { Component } from "react";
import logo from "./assets/images/logo.jpg";

import { Navbar, Nav, Badge, Container, Row, Col } from "react-bootstrap";
import "./styles.scss";

class Question extends Component {
  render() {
    return (
      <Container className="rounded-container question">
        <Row>
          <Col md="auto">
            <img src={logo} className="question-img" alt="logo" />
          </Col>
          <Col>
            <h4>
              Синица
            </h4>
            Here will be audioplayer
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Question;
