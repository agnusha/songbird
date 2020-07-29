import React, { Component } from "react";
import Checkbox from "../checkbox/index";

import { Container, Row } from "react-bootstrap";
import "./styles.scss";

class Option extends Component {
  render() {
    return (
      <Container className="rounded-container option">
        <Row>
          Variant 1
          <Checkbox checked /> Variant 2
          <Checkbox disabled />

        </Row>
        <Row>
          Variant 2
      </Row>
        <Row>
          Variant 3
    </Row>
      </Container>
    );
  }
}

export default Option;
