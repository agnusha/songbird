import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import Checkbox from './checkbox/index';

import rightAnswer from './assets/audio/correct.mp3';
import wrongAnswer from './assets/audio/incorrect.mp3';

import './styles.scss';

class Option extends Component {
  static propTypes = {
    items: PropTypes.array,
    currentRightItemNumber: PropTypes.number,
    onClick: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      wrongAnswerCount: 0,
      guessed: false,
    };
    this.audioRefCorrect = React.createRef();
    this.audioRefIncorrect = React.createRef();
  }

  playAudio = (wrongAndshouldAddTries, guessed) => {
    if (!guessed) {
      if (wrongAndshouldAddTries) {
        this.audioRefIncorrect.current.play();
      } else {
        this.audioRefCorrect.current.play();
      }
    }
  };

  setTries = (wrongAndshouldAddTries) => {
    if (wrongAndshouldAddTries) {
      const currentWrongAnswerCount = this.state.wrongAnswerCount + 1;
      this.setState({ wrongAnswerCount: currentWrongAnswerCount });
    }
  };

  selectOption = (wrongAndshouldAddTries, selectedBirdId) => {
    const guessedBefore = this.state.guessed;
    const guessedNow = this.state.guessed ? true : !wrongAndshouldAddTries;
    this.setState({ guessed: guessedNow });

    this.setTries(wrongAndshouldAddTries);
    this.playAudio(wrongAndshouldAddTries, guessedBefore);

    this.props.onClick(selectedBirdId - 1, guessedNow !== guessedBefore, guessedNow, this.state.wrongAnswerCount);
    return guessedBefore;
  };

  render() {
    const {
      items, currentRightItemNumber,
    } = this.props;

    return (
      <Container className="rounded-container option main-container">
        {items.map((item, i) => <Checkbox key={i} id={item.id} name={item.name}
          onClick={this.selectOption} currentRightItemNumber={currentRightItemNumber}></Checkbox>)}

        <audio src={rightAnswer} ref={this.audioRefCorrect} />
        <audio src={wrongAnswer} ref={this.audioRefIncorrect} />
      </Container>
    );
  }
}

export default Option;
