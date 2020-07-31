import React, { Component } from "react";
import logo from "./assets/images/logo.jpg";
import PropTypes from 'prop-types';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';

import { Container, Row, Col } from "react-bootstrap";
import "./styles.scss";

class Question extends Component {
  static propTypes = {
    bird: PropTypes.object,
    guessed: PropTypes.bool,
  };

  render() {
    const {
      bird, guessed
    } = this.props;

    return (
      <Container fluid className="rounded-container question">
        <Row>
          <Col md="auto">
            <img src={logo} className="question-img" alt="logo" />
          </Col>
          <Col>
            <h4>
              {guessed ? bird.name : "*******"}
            </h4>

            <AudioPlayer
              src={bird.audio}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Question;
