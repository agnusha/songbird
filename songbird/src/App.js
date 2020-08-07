import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/header/index";
import Question from "./component/question/index";
import Option from "./component/option/index";
import Description from "./component/description/index";

import { Container, Row, Col, Button } from "react-bootstrap";
import birdsData from "./data/birds";
import { shuffleArray } from "./utils";


class App extends Component {
  changeLevel = () => {
    console.log(this);
  };

  static defaultProps = {
    currentRightItemNumber: Math.floor(Math.random() * 6),
    currentSelectedItemNumber: null,
    guessed: false,
    score: 0,
    level: 0,
    score: 0,
    score: 0,
  };

  constructor(props) {
    super(props);
    this.state = {
      currentRightItemNumber: props.currentRightItemNumber,
      currentSelectedItemNumber: props.currentSelectedItemNumber,
      guessed: props.guessed,
      score: props.score,
    };
  }

  _changeCategory = (category) => {
    console.log("_changeCategory!!!!!!!!!!!!!!!!!!!!!!");
    console.log(category);
    this.setState({ category });
  };

  _changeSelectedBird = (selectedBirdNumber, changeGuessed, guessed, wrongAnswerCount) => {
    const newScore = changeGuessed ? this.state.score + 5 - wrongAnswerCount : this.state.score;
    this.setState({ currentSelectedItemNumber: selectedBirdNumber, guessed, score: newScore });
  };

  render() {
    const category = 0;
    const { currentRightItemNumber, currentSelectedItemNumber, guessed, score } = this.state;


    // const sixWorkingItems = shuffleArray(birdsData[category]);
    const sixWorkingItems = birdsData[category];

    console.log("state");
    console.log(this.state);
    console.log(sixWorkingItems);

    return (
      <div className="songbird-app">
        <Header
          category={category}
          score={score}
          onClick={this._changeCategory}
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
                onClick={this._changeSelectedBird}>
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
              onClick={this.changeLevel}>
              Next level
            </Button>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
