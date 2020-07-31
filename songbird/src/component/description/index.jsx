import React, { Component } from "react";

import PropTypes from 'prop-types';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';


import { Container, Row, Col } from "react-bootstrap";
import "./styles.scss";

class Description extends Component {
  static propTypes = {
    bird: PropTypes.object,
  };

  render() {
    const {
      bird
    } = this.props;

    return (
      <div>
        <Container className="rounded-container description main-container">
          <Row className="mb-2">
            <Col md={12}>
              <p>Послушайте плеер.</p>
              <p>Выберите птицу из списка.</p>
            </Col>
          </Row>
        </Container>
        <Container className="rounded-container description main-container">
          <Row className="mb-2">
            <Col md={5}>
              <img src={bird.image} className="description-img bordered-img" alt="logo" />
            </Col>
            <Col md={7}>
              <h4>{bird.name}</h4>
              <h5>{bird.species} </h5>
              <AudioPlayer
                src={bird.audio}
              />
            </Col>
          </Row>
          <Row className="mb-2">
            <Col md="auto">
              <p>
                {bird.description}
              </p>
            </Col>
          </Row>
        </Container>
      </div>



    );
  }
}

export default Description;
