import React, { Component } from "react";
import logo from "./assets/images/logo.jpg";

import { Container, Row, Col } from "react-bootstrap";
import "./styles.scss";

class Question extends Component {
  render() {
    return (
      <Container fluid className="rounded-container question">
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
