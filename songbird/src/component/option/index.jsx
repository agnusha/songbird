import React, { Component } from "react";
import Checkbox from "../checkbox/index";

import { Container, Row } from "react-bootstrap";
import "./styles.scss";

class Option extends Component {
  render() {
    return (
      <Container className="rounded-container option">
        <Row className="rounded-container__row">
          <Checkbox checked /> Variant 1
        </Row>

        <Row className="rounded-container__row">
          <Checkbox /> Variant 1
        </Row>

        <Row className="rounded-container__row">
          <Checkbox checked /> Variant 1
        </Row>

        <Row className="rounded-container__row">
          <Checkbox checked /> Variant 1
        </Row>

        <Row className="rounded-container__row">
          <Checkbox checked /> Variant 1
        </Row>

      </Container>
    );
  }
}

export default Option;
