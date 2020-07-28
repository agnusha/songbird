import React, { Component } from 'react';
import logo from './assets/images/logo.jpg';

import {
  Navbar, Nav, Badge, Container, Row, Col
} from 'react-bootstrap';
import './styles.scss';


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
              <Nav.Link className="mr-auto header-nav__link" href="/#">Разминка</Nav.Link>
              <Nav.Link className="mr-auto header-nav__link" href="/#">Воробьиные</Nav.Link>
              <Nav.Link className="mr-auto header-nav__link" href="/#">Лесные птицы</Nav.Link>
              <Nav.Link className="mr-auto header-nav__link" href="/#">Певчие птицы</Nav.Link>
              <Nav.Link className="mr-auto header-nav__link" href="/#">Хищные птицы</Nav.Link>
              <Nav.Link className="mr-auto header-nav__link" href="/#">Морские птицы</Nav.Link>
            </Nav>

            <h4>Score: <Badge variant="secondary" className="header-score">0</Badge></h4>
          </Navbar.Collapse>
        </Navbar>
      </header >
    );
  }
}

export default Header;
