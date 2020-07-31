import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/header/index";
import Question from "./component/question/index";
import Option from "./component/option/index";
import Description from "./component/description/index";

import { Container, Row, Col, Button } from "react-bootstrap";
import birdsData from "./data/birds";
import { shuffleArray } from './utils'


function App() {

  const category = 0;
  const score = 0;

  const currentRightItemNumber = 2;
  const currentSelectedItemNumber = 3;

  const sixWorkingItems = shuffleArray(birdsData[category]);

  console.log(sixWorkingItems);
  return (
    <div className="songbird-app">
      <Header category={category}></Header>
      <Container fluid className="container-content my-5">
        <Row className="mb-5">
          <Question bird={sixWorkingItems[currentRightItemNumber]} guessed={false}></Question>
        </Row>
        <Row className="mb-5 justify-content-md-between">
          <Col md={5} className="p-0 mr-4">
            <Option items={sixWorkingItems} currentItemNumber={currentRightItemNumber}></Option>
          </Col>
          <Col md={6} className="p-0 ml-4">
            <Description bird={sixWorkingItems[currentSelectedItemNumber]}></Description>
          </Col>
        </Row>
        <Row>
          <Button className="songbird-app__button" variant="success" size="lg" block onClick="changeLevel">Next level</Button>
        </Row>
      </Container>
    </div>
  );
}

export default App;
