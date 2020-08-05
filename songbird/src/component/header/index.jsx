import React, { Component } from "react";
import PropTypes from 'prop-types';
import logo from "./assets/images/logo.jpg";

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

  selectCategory = () => {
    console.log("sadasdasdasdawsdsa");
    console.log(this);

    this.props.onClick(this.id);
  };

  render() {
    const { category, score } = this.props;
    console.log("score");
    console.log(score);

    return (
      <header className="header" id="basic-header">
        <Container fluid className="px-5 py-3">
          <Row>
            <Col md="auto" className="margined-col">
              <img src={logo} className="songbird-logo my-auto" alt="logo" />
            </Col>
            <Col md="auto" className="margined-col mr-auto">
              <ul className="pagination">
                {categories.map((item, i) =>
                  <Category key={i} item={item} active={category === i} onClick={this.selectCategory}>
                  </Category>
                )}
              </ul>
            </Col>
            <Col md="auto" className="margined-col">
              <div >
                <h4>
                  Score: <Badge variant="secondary" className="header-score ">{score}</Badge>
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
