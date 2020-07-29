import React, { Component } from "react";
import logo from "./assets/images/logo.jpg";

import { Container, Row, Col } from "react-bootstrap";
import "./styles.scss";

class Description extends Component {
  render() {
    return (
      <Container className="rounded-container description main-container">
        <Row className="mb-2">
          <Col md="auto">
            <img src={logo} className="question-img" alt="logo" />
          </Col>
          <Col>
            <h4>
              Синица
          </h4>
            <h5>
              Desc
           </h5>
          Here will be audioplayer
        </Col>
        </Row>
        <Row className="mb-2">
          <Col md="auto">
            <p>
              В щебетании синиц различают более 40 различных звуковых сочетаний.
              Поют они практически круглый год, немного затихая только зимой.
              Синицы настоящие санитары леса. Одна пара синиц в период гнездования оберегает от вредителей десятки деревьев.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Description;
