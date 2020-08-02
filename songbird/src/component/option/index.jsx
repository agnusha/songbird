import React, { Component } from "react";
import Checkbox from "../checkbox/index";
import PropTypes from 'prop-types';

import { Container } from "react-bootstrap";
import "./styles.scss";

class Option extends Component {
  static propTypes = {
    items: PropTypes.array,
    currentRightItemNumber: PropTypes.number,
    onClick: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      try: 0,
      guessed: false,
    };

    console.log("-----------------");
    console.log("try in constructor option");
    console.log(this.state.try);
    console.log("-----------------");

  };

  _changeTries = (wrongAndshouldAddTries, selectedBirdId) => {
    console.log("-----------------");
    console.log("guessed before in _changeTries");
    console.log(this.state.guessed);

    var guessedBefore = this.state.guessed;
    var guessed = this.state.guessed ? true : !wrongAndshouldAddTries;
    this.setState({ guessed: guessed });

    console.log("guessed after in _changeTries");
    console.log(guessed);

    if (wrongAndshouldAddTries) {
      const currentTyCount = this.state.try + 1;
      this.setState({ try: currentTyCount })
    }

    this.props.onClick(--selectedBirdId, guessed);
    return guessedBefore;

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
