import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/header/index";
import Question from "./component/question/index";
import Option from "./component/option/index";
import Description from "./component/description/index";

import { Container, Row, Col, Button } from "react-bootstrap";
import birdsData from "./data/birds";



function App() {
  return (
    <div className="songbird-app">
      <Header></Header>
      <Container className="my-5">
        <Row className="mb-5">
          <Question></Question>
        </Row>
        <Row className="mb-5">
          <Col className="p-0 mr-4">
            <Option></Option>
          </Col>
          <Col className="p-0 ml-4">
            <Description></Description>
          </Col>
        </Row>
        <Row>
          <Button className="songbird-app__button" variant="success" size="lg" block>Next level</Button>
        </Row>
      </Container>
    </div>
  );
}

export default App;
