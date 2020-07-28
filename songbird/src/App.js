import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/header/index";
import Question from "./component/question/index";

import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="songbird-app">
      <Header></Header>
      <Container>
        <Row>
          <Question></Question>
        </Row>
        <Row>
          <Col></Col>
          <Col></Col>
        </Row>
        <Row></Row>
      </Container>
    </div>
  );
}

export default App;
