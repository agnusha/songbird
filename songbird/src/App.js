import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container, Row, Col, Button,
} from 'react-bootstrap';
import Header from './component/header/index';
import Question from './component/question/index';
import Option from './component/option/index';
import Description from './component/description/index';
import ModalResult from './component/modal/index';

import birdsData from './data/birds';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.getDefaultState();
  }

  componentDidMount() {
    console.log("В задании требование: для удобства проверки правильные ответы выведите в консоль.");
    console.log("Первый правильный ответ", birdsData[this.state.categoryId][this.state.currentRightItemNumber].name);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.categoryId !== this.state.categoryId) {
      console.log("Правильный ответ", birdsData[this.state.categoryId][this.state.currentRightItemNumber].name);
    }
  }

  getDefaultState = () => {
    return {
      categoryId: 0,
      currentWrongAnswerCount: 0,
      score: 0,
      currentRightItemNumber: Math.floor(Math.random() * 6),
      currentSelectedItemNumber: null,
      isCurrentBirdGuessed: false,
      showModal: false,
      guessedNumbers: [],
    };
  };

  nextQuestionClick = () => {
    const { guessedNumbers } = this.state;

    if (guessedNumbers.length < 6) {
      let nextQuestion;
      do {
        nextQuestion = Math.floor(Math.random() * 6);
      }
      while (guessedNumbers.includes(nextQuestion));

      this.setState((state) => ({
        currentSelectedItemNumber: null, currentRightItemNumber: nextQuestion,
        showModal: false, isCurrentBirdGuessed: false, currentWrongAnswerCount: 0,
        categoryId: state.categoryId + 1,
      }));
    } else this.setState({ showModal: true });
  };

  optionClick = (isItWasAnswer, isNowRightAnswer, selectedBirdId) => {
    if (isItWasAnswer && !this.state.isCurrentBirdGuessed) {
      if (isNowRightAnswer)
        this.setState((state) => ({
          guessedNumbers: [...state.guessedNumbers, selectedBirdId],
          isCurrentBirdGuessed: isNowRightAnswer,
          score: state.score + 5 - state.currentWrongAnswerCount
        }));
      else
        this.setState((state) => ({ currentWrongAnswerCount: state.currentWrongAnswerCount + 1 }));
    }
    this.setState({ currentSelectedItemNumber: --selectedBirdId });
  };

  modalButtonClick = (repeatThisCategory) => {
    this.setState({ showModal: false });
    if (repeatThisCategory) {
      this.setState(this.getDefaultState());
    }
  };

  render() {
    const {
      currentRightItemNumber, currentSelectedItemNumber, isCurrentBirdGuessed, score, showModal, categoryId } = this.state;
    const sixWorkingItems = birdsData[categoryId];

    console.log(this.state);

    return (
      <div className="songbird-app">
        <Header
          categoryId={categoryId}
          score={score}
        ></Header>
        {showModal
          ? <ModalResult score={score} maxResult={sixWorkingItems.length * 5}
            showModal={showModal} onClick={this.modalButtonClick} />
          : <Container fluid className="container-content mt-4">
            <Row className="mb-4">
              <Question
                bird={sixWorkingItems[currentRightItemNumber]}
                guessed={isCurrentBirdGuessed}
              ></Question>
            </Row>
            <Row className="justify-content-between">
              <Col sm={4} className="p-0 mb-4">
                <Option
                  items={sixWorkingItems}
                  isCurrentBirdGuessed={isCurrentBirdGuessed}
                  currentRightItemNumber={currentRightItemNumber}
                  onClick={this.optionClick}>
                </Option>
              </Col>
              <Col sm={7} className="p-0 mb-4">
                <Description
                  bird={currentSelectedItemNumber !== null ? sixWorkingItems[currentSelectedItemNumber] : null}
                ></Description>
              </Col>
            </Row>
            <Row>
              <Button
                className="songbird-app__button"
                size="lg"
                block
                disabled={!isCurrentBirdGuessed}
                onClick={this.nextQuestionClick}>
                Далее
            </Button>
            </Row>
          </Container>
        }
      </div>
    );
  }
}

export default App;
