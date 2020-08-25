import React, { Component } from "react";
import PropTypes from 'prop-types';
import logo from "./assets/images/logo.svg";
import Category from "./category/index";


import { Badge, Container, Row, Col } from "react-bootstrap";
import "./styles.scss";

import categories from "../../data/categories";

class Header extends Component {
  static propTypes = {
    category: PropTypes.number,
    score: PropTypes.number,
    onClick: PropTypes.func
  };

  render() {
    const { score, categoryId } = this.props;
    return (
      <header className="header" id="basic-header">
        <Container fluid className="px-5 py-1">
          <Row className="header-row">
            <Col md="auto" className="margined-col">
              <img src={logo} className="songbird-logo my-auto" alt="logo" />
            </Col>
            <Col md="auto" className="margined-col mr-auto">
              <ul className="pagination my-auto">
                {categories.map((item, i) =>
                  <Category key={i} item={item} active={categoryId === i} />
                )}
              </ul>
            </Col>
            <Col md="auto" className="margined-col">
              <div >
                <h4>
                  Score: <Badge variant="secondary" className="header-score">{score}</Badge>
                </h4>
              </div>
            </Col>
          </Row>
        </Container>
      </header >
    );
  }
}

export default Header;
