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
    isCurrentBirdGuessed: PropTypes.bool,
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

  playAudio = (isNowRightAnswer, guessed) => {
    if (!guessed) {
      if (isNowRightAnswer) {
        this.audioRefCorrect.current.play();
      } else {
        this.audioRefIncorrect.current.play();
      }
    }
  };

  setTries = (isNowRightAnswer) => {
    if (!isNowRightAnswer) {
      const currentWrongAnswerCount = this.state.wrongAnswerCount + 1;
      this.setState({ wrongAnswerCount: currentWrongAnswerCount });
    }
  };

  selectOption = (isNowRightAnswer, selectedBirdId) => {
    const guessedBefore = this.state.guessed;
    const guessedNow = isNowRightAnswer;
    this.setState({ guessed: guessedNow });

    this.setTries(isNowRightAnswer);
    this.playAudio(isNowRightAnswer, guessedBefore);

    this.props.onClick(selectedBirdId - 1, guessedNow !== guessedBefore, guessedNow, this.state.wrongAnswerCount);
    return guessedBefore;
  };

  render() {
    const {
      items, currentRightItemNumber, isCurrentBirdGuessed,
    } = this.props;

    return (
      <Container className="rounded-container option main-container">
        {items.map((item, i) => <Checkbox key={i} id={item.id} name={item.name}
          currentRightItemNumber={currentRightItemNumber} isCurrentBirdGuessed={isCurrentBirdGuessed}
          onClick={this.selectOption} />)}

        <audio src={rightAnswer} ref={this.audioRefCorrect} />
        <audio src={wrongAnswer} ref={this.audioRefIncorrect} />
      </Container>
    );
  }
}

export default Option;
