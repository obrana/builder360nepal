import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CustomNavbar.css";

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="#">Profiles</Nav.Link>
            <Nav.Link href="#">Process</Nav.Link>
            <Nav.Link href="#">Projects</Nav.Link>
            <Nav.Link href="#">Types</Nav.Link>
          </Nav>
          <Navbar.Brand>
            <Image src="assets/logo.png" />
          </Navbar.Brand>

          <Nav>
            <Nav.Link href="#">Contact Us</Nav.Link>
            <Nav.Link href="#">Request a quote</Nav.Link>
            <Nav.Link href="#">
              <i class="fab fa-facebook-f"></i>
            </Nav.Link>
            <Nav.Link href="#">
              <i class="fab fa-twitter"></i>
            </Nav.Link>
            <Nav.Link href="#">
              <i class="fab fa-instagram"></i>
            </Nav.Link>
            <Nav.Link href="#">
              <i class="fab fa-linkedin"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
