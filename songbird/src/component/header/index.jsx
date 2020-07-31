import React, { Component } from "react";
import logo from "./assets/images/logo.jpg";


import { Badge, Container, Row, Col } from "react-bootstrap";
import "./styles.scss";

import categories from "../../data/categories";

class Header extends Component {
  render() {
    return (
      <header className="header" id="basic-header">
        <Container fluid className="px-5 py-3">
          <Row>
            <Col md="auto">
              <img src={logo} className="songbird-logo my-auto" alt="logo" />
            </Col>
            <Col md="auto" className="mr-auto my-auto">
              <ul className="pagination">
                {categories.map((item, i) => <li className="page-item" key={i}> <span className="page-link" id={item.id} href="#">{item.name}</span></li>)}
              </ul>
            </Col>
            <Col md="auto" className="my-auto">
              <h4>
                Score: <Badge variant="secondary" className="header-score ">0</Badge>
              </h4>
            </Col>
          </Row>
        </Container>
      </header>
    );
  }
}

export default Header;
