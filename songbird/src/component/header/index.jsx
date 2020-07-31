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
            <Col md="auto" className="margined-col">
              <img src={logo} className="songbird-logo my-auto" alt="logo" />
            </Col>
            <Col md="auto" className="margined-col mr-auto">
              <ul className="pagination">
                {categories.map((item, i) => <li className="page-item" key={i}> <span className="page-link" id={item.id} href="#">{item.name}</span></li>)}
              </ul>
            </Col>
            <Col md="auto" className="margined-col">
              <div >
                <h4>
                  Score: <Badge variant="secondary" className="header-score ">0</Badge>
                </h4>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    );
  }
}

export default Header;
