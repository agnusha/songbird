import React, { Component } from "react";
import logo from "./assets/images/logo.jpg";

import { Container, Row, Col } from "react-bootstrap";
import "./styles.scss";

class Description extends Component {
  render() {
    return (
      <div>
        <Container className="rounded-container description main-container">
          <Row className="mb-2">
            <Col md={12}>
              <p>Послушайте плеер.</p>
              <p>Выберите птицу из списка.</p>
            </Col>
          </Row>
        </Container>
        <Container className="rounded-container description main-container">
          <Row className="mb-2">
            <Col md={5}>
              <img src={logo} className="description-img" alt="logo" />
            </Col>
            <Col md={7}>
              <h4> Синица </h4>
              <h5> Desc</h5>
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
      </div>



    );
  }
}

export default Description;
