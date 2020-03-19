import React, { Component } from "react";
import { Navbar, Nav, Image, Container } from "react-bootstrap";

import "./CustomNavbar.css";
import { Link, animateScroll as scroll } from "react-scroll";

export default class CustomNavbar extends Component {
  render() {
    return (
      <Container>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          fixed="top"
        >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link>
                <Link to="profile" smooth={true} duration={1000}>
                  Profiles
                </Link>{" "}
              </Nav.Link>
              <Nav.Link>
                <Link to="processA" smooth={true} duration={1000}>
                  Process
                </Link>{" "}
              </Nav.Link>
              <Nav.Link>
                <Link to="projects" smooth={true} duration={1000}>
                  Projects
                </Link>{" "}
              </Nav.Link>
              <Nav.Link>
                <Link to="buildingtabs" smooth={true} duration={1000}>
                  Types
                </Link>
              </Nav.Link>
            </Nav>
            <Navbar.Brand onClick={() => scroll.scrollToTop()}>
              <Image src="assets/logo.png" />
            </Navbar.Brand>

            <Nav>
              <Nav.Link>
                <Link to="collab" smooth={true} duration={1000}>
                  Contact Us
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="#">Request a quote</Link>{" "}
              </Nav.Link>
              <Nav.Link>
                <Link to="#">
                  <i class="fab fa-facebook-f"></i>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="#">
                  <i class="fab fa-twitter"></i>
                </Link>{" "}
              </Nav.Link>
              <Nav.Link>
                <Link to="#">
                  <i class="fab fa-instagram"></i>
                </Link>{" "}
              </Nav.Link>
              <Nav.Link>
                <Link to="#">
                  <i class="fab fa-linkedin"></i>
                </Link>{" "}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}
