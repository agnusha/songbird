import React, { Component } from "react";
import Checkbox from "../checkbox/index";
import PropTypes from 'prop-types';

import rightAnswer from './assets/audio/correct.mp3';
import wrongAnswer from './assets/audio/incorrect.mp3'


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

    this.audioRefCorrect = React.createRef();
    this.audioRefIncorrect = React.createRef();
  };

  _playAudio = (wrongAndshouldAddTries, guessed) => {
    console.log("_playAudio");
    console.log(guessed);
    console.log(wrongAndshouldAddTries);

    if (!guessed) {
      if (wrongAndshouldAddTries) {
        this.audioRefIncorrect.current.play();
      }
      else {
        this.audioRefCorrect.current.play();
      }
    }
  };

  _setTries = (wrongAndshouldAddTries) => {
    if (wrongAndshouldAddTries) {
      const currentTryCount = this.state.try + 1;
      this.setState({ try: currentTryCount });
    }
  };

  changeTries = (wrongAndshouldAddTries, selectedBirdId) => {
    // console.log("-----------------");
    // console.log("guessed before in _changeTries");
    // console.log(this.state.guessed);
    var guessedBefore = this.state.guessed;
    var guessed = this.state.guessed ? true : !wrongAndshouldAddTries;
    this.setState({ guessed: guessed });
    // console.log("guessed after in _changeTries");
    // console.log(guessed);

    this._setTries(wrongAndshouldAddTries);
    this._playAudio(wrongAndshouldAddTries, guessedBefore);

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
          <Checkbox key={i} id={item.id} name={item.name} onClick={this.changeTries} currentRightItemNumber={currentRightItemNumber}></Checkbox>
        )}

        <audio src={rightAnswer} ref={this.audioRefCorrect} />
        <audio src={wrongAnswer} ref={this.audioRefIncorrect} />
      </Container>
    );
  }
}

export default Option;
