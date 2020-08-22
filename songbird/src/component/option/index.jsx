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

    this.audioRefCorrect = React.createRef();
    this.audioRefIncorrect = React.createRef();
  }

  playAudio = (isNowRightAnswer) => {
    if (isNowRightAnswer) {
      this.audioRefCorrect.current.play();
    } else {
      this.audioRefIncorrect.current.play();
    }
  };

  selectOption = (isItWasAnswer, isNowRightAnswer, selectedBirdId) => {
    if (!this.props.isCurrentBirdGuessed) this.playAudio(isNowRightAnswer);
    this.props.onClick(isItWasAnswer, isNowRightAnswer, selectedBirdId);
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
