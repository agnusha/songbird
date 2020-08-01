import React, { Component } from "react";
import Checkbox from "../checkbox/index";
import PropTypes from 'prop-types';

import { Container, Row } from "react-bootstrap";
import "./styles.scss";

class Option extends Component {
  static propTypes = {
    items: PropTypes.array,
    currentRightItemNumber: PropTypes.number
  };

  constructor(props) {
    super(props);
    console.log("constructor Option");
    this.state = {
      try: 0,
    };
    console.log("-----------------");
    console.log("try");
    console.log(this.state.try);
    console.log("-----------------");
  };

  _handleClick = () => {


    console.log(this);

    // if (id === currentRightItemNumber) {
    //   this.setState({
    //     checked: !this.state.checked,
    //     disabled: true,
    //     try: this.state.try,
    //   });
    // }
    // else {
    //   this.setState({
    //     disabled: !this.state.disabled,
    //     try: (this.state.try + 1),
    //   });
    // }


    console.log("-----------------");
    console.log("try");
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
          <Row key={i} className="rounded-container__row" onClick={this._handleClick}>
            <Checkbox id={item.id} currentRightItemNumber={currentRightItemNumber}></Checkbox> {item.name}
          </Row>
        )}
      </Container>
    );
  }
}

export default Option;
