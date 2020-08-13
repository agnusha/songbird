import React, { Component } from "react";
import Checkbox from "./checkbox/index";
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
      wrongAnswerCount: 0,
      guessed: false,
    };
    this.audioRefCorrect = React.createRef();
    this.audioRefIncorrect = React.createRef();
  };

  _playAudio = (wrongAndshouldAddTries, guessed) => {
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
      const currentWrongAnswerCount = this.state.wrongAnswerCount + 1;
      this.setState({ wrongAnswerCount: currentWrongAnswerCount });
    }
  };

  selectOption = (wrongAndshouldAddTries, selectedBirdId) => {

    const guessedBefore = this.state.guessed;
    const guessedNow = this.state.guessed ? true : !wrongAndshouldAddTries;
    this.setState({ guessed: guessedNow });

    this._setTries(wrongAndshouldAddTries);
    this._playAudio(wrongAndshouldAddTries, guessedBefore);

    this.props.onClick(--selectedBirdId, guessedNow !== guessedBefore, guessedNow, this.state.wrongAnswerCount);
    return guessedBefore;
  };

  render() {
    const {
      items, currentRightItemNumber
    } = this.props;

    return (
      <Container className="rounded-container option main-container">
        {items.map((item, i) =>
          <Checkbox key={i} id={item.id} name={item.name}
            onClick={this.selectOption} currentRightItemNumber={currentRightItemNumber}></Checkbox>
        )}

        <audio src={rightAnswer} ref={this.audioRefCorrect} />
        <audio src={wrongAnswer} ref={this.audioRefIncorrect} />
      </Container>
    );
  }
}

export default Option;
