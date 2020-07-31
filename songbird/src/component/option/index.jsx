import React, { Component } from "react";
import Checkbox from "../checkbox/index";
import PropTypes from 'prop-types';

import { Container, Row } from "react-bootstrap";
import "./styles.scss";

class Option extends Component {
  static propTypes = {
    items: PropTypes.array,
  };

  render() {
    const {
      items
    } = this.props;


    return (
      <Container className="rounded-container option main-container">
        {items.map((item, i) =>
          <Row key={i} className="rounded-container__row">
            <Checkbox id={item.id}></Checkbox> {item.name}
          </Row>
        )}
      </Container>
    );
  }
}

export default Option;
