import React, { Component } from "react";
import PropTypes from "prop-types";
import defaultBird from "./images/bird.jpg";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/src/styles.scss";

import { Container, Row, Col } from "react-bootstrap";
import "./styles.scss";

class Question extends Component {
  static propTypes = {
    bird: PropTypes.object,
    guessed: PropTypes.bool,
  };

  render() {
    const { bird, guessed } = this.props;

    return (
      <Container fluid className="rounded-container question">
        <Row>
          <Col md="auto">
            <img
              src={guessed ? bird.image : defaultBird}
              className="question-img bordered-img"
              alt="logo"
            />
          </Col>
          <Col>
            <h4>{guessed ? bird.name : "*******"}</h4>
            <AudioPlayer src={bird.audio} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Question;
