import React, { Component } from "react";
import Checkbox from "../checkbox/index";
import PropTypes from 'prop-types';

import { Container } from "react-bootstrap";
import "./styles.scss";

class Option extends Component {
  static propTypes = {
    items: PropTypes.array,
    currentRightItemNumber: PropTypes.number
  };

  constructor(props) {
    super(props);
    this.state = {
      try: 0,
    };

    console.log("-----------------");
    console.log("try in constructor option");
    console.log(this.state.try);
    console.log("-----------------");

  };

  _changeTries = () => {

    this.setState({ try: this.state.try + 1 })
    console.log("-----------------");
    console.log("try in _changeTries");
    console.log(this.state.try);
    console.log("-----------------");

  };

  render() {
    const {
      items, currentRightItemNumber
    } = this.props;

    console.log("currentRightItemNumber");
    console.log(currentRightItemNumber);

    return (
      <Container className="rounded-container option main-container">
        {items.map((item, i) =>
          <Checkbox key={i} id={item.id} name={item.name} onClick={this._changeTries} currentRightItemNumber={currentRightItemNumber}></Checkbox>
        )}
      </Container>
    );
  }
}

export default Option;
