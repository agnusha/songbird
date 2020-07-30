import React, { Component } from "react";
import logo from "./assets/images/logo.jpg";


import { Navbar, Nav, Badge } from "react-bootstrap";
import "./styles.scss";

import categories from "../../data/categories";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">
            <img src={logo} className="songbird-logo" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto header-nav">
              {categories.map((item, i) => <Nav.Link className="mr-auto header-nav__link" id={item.id}>{item.name}</Nav.Link>)}
            </Nav>
            <h4>
              Score: <Badge variant="secondary" className="header-score">0</Badge>
            </h4>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}

export default Header;
