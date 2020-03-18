import React, { Component } from "react";
import { Navbar, Nav, Image, Container } from "react-bootstrap";

import "./CustomNavbar.css";
import {Link, animateScroll as scroll} from "react-scroll";

export default class CustomNavbar extends Component {
  render() {
    return (
      <Container>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Link to="profile" smooth={true} duration={1000}>Profiles</Link>
              <Link to="process" smooth={true} duration={1000}>Process</Link>
              <Link to="projects" smooth={true} duration={1000}>Projects</Link>
              <Link to="buildingTypes" smooth={true} duration={1000}>Types</Link>
            </Nav>
            <Navbar.Brand onClick={()=> scroll.scrollToTop()}>
              <Image src="assets/logo.png" />
            </Navbar.Brand>

            <Nav>
              <Link to="contact" smooth={true} duration={1000}>Contact Us</Link>
              <Link href="#">Request a quote</Link>
              <Link href="#">
                <i class="fab fa-facebook-f"></i>
              </Link>
              <Link href="#">
                <i class="fab fa-twitter"></i>
              </Link>
              <Link href="#">
                <i class="fab fa-instagram"></i>
              </Link>
              <Link href="#">
                <i class="fab fa-linkedin"></i>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}
