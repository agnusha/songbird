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
  static defaultProps = {
    currentRightItemNumber: Math.floor(Math.random() * 6),
    currentSelectedItemNumber: null,
    guessed: false,
    guessedNumbers: [],
    score: 0,
    showModal: false,
    category: 0,
  };

  constructor(props) {
    super(props);
    this.state = {
      currentRightItemNumber: props.currentRightItemNumber,
      currentSelectedItemNumber: props.currentSelectedItemNumber,
      guessed: props.guessed,
      score: props.score,
      showModal: props.showModal,
      category: props.category,
      guessedNumbers: props.guessedNumbers,
    };
  }

  categoryClick = (category) => {
    this.setState({
      currentSelectedItemNumber: null, guessed: false, score: 0, category,
    });
  };

  nextQuestionClick = () => {
    let nextQuestion;
    do {
      nextQuestion = Math.floor(Math.random() * 6);
    }
    while (this.state.guessedNumbers.includes(nextQuestion));
    console.log('find nextQuestion');
    console.log(nextQuestion);

    this.setState({ currentRightItemNumber: nextQuestion, showModal: true });
  };

  optionClick = (selectedBirdNumber, changeGuessed, guessed, wrongAnswerCount) => {
    const newScore = changeGuessed ? this.state.score + 5 - wrongAnswerCount : this.state.score;
    this.setState({ currentSelectedItemNumber: selectedBirdNumber, guessed, score: newScore });
    if (guessed && changeGuessed) {
      this.setState((state) => ({ guessedNumbers: [...state.guessedNumbers, selectedBirdNumber] }));
    }
  };

  modalButtonClick = (showModal) => {
    this.setState({ showModal });
  };

  render() {
    const {
      currentRightItemNumber, currentSelectedItemNumber, guessed, score, showModal, category,
    } = this.state;
    const sixWorkingItems = birdsData[category];

    console.log('state');
    console.log(this.state);
    console.log('------------ sixWorkingItems -----------');
    console.log(sixWorkingItems);

    return (
      <div className="songbird-app">
        <Header
          category={category}
          score={score}
          onClick={this.categoryClick}
        ></Header>
        <Container fluid className="container-content mt-4">
          <Row className="mb-5">
            <Question
              bird={sixWorkingItems[currentRightItemNumber]}
              guessed={guessed}
            ></Question>
          </Row>
          <Row className="justify-content-between">
            <Col sm={5} className="p-0 mb-5">
              <Option
                items={sixWorkingItems}
                currentRightItemNumber={currentRightItemNumber}
                onClick={this.optionClick}>
              </Option>
            </Col>
            <Col sm={6} className="p-0 mb-5">
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
              disabled={!guessed}
              onClick={this.nextQuestionClick}>
              Далее
            </Button>
          </Row>

          <ModalResult score={score} maxResult={sixWorkingItems.length * 5}
            showModal={showModal} onClick={this.modalButtonClick} />
        </Container>
      </div>
    );
  }
}

export default App;
