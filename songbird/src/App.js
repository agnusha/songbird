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
    level: 0,
    score: 0,
    score: 0,
    score: 0,
  };

  constructor(props) {
    super(props);
    this.state = {
      currentRightItemNumber: props.currentRightItemNumber,
      currentSelectedItemNumber: props.currentSelectedItemNumber,
      guessed: props.guessed,
    };
  }

  _changeSelectedBird = (selectedBirdNumber, guessed) => {
    console.log("----------_changeSelectedBird -------");
    console.log(selectedBirdNumber);
    this.setState({ currentSelectedItemNumber: selectedBirdNumber, guessed });
  };

  render() {
    const category = 0;
    const score = 0;
    const { currentRightItemNumber, currentSelectedItemNumber, guessed } = this.state;


    // const sixWorkingItems = shuffleArray(birdsData[category]);
    const sixWorkingItems = birdsData[category];

    console.log("state");
    console.log(this.state);
    console.log(sixWorkingItems);

    return (
      <div className="songbird-app">
        <Header category={category}></Header>
        <Container fluid className="container-content my-5">
          <Row className="mb-5">
            <Question
              bird={sixWorkingItems[currentRightItemNumber]}
              guessed={guessed}
            ></Question>
          </Row>
          <Row className="mb-5 justify-content-md-between">
            <Col md={5} className="p-0 mr-4">
              <Option
                items={sixWorkingItems}
                currentRightItemNumber={currentRightItemNumber}
                onClick={this._changeSelectedBird}>
              </Option>
            </Col>
            <Col md={6} className="p-0 ml-4">
              <Description
                bird={currentSelectedItemNumber !== null ? sixWorkingItems[currentSelectedItemNumber] : null}
              ></Description>
            </Col>
          </Row>
          <Row>
            <Button
              className="songbird-app__button"
              variant="success"
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
