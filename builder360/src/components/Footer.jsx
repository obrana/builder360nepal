import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Image } from "react-bootstrap";

import "./footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-3 location">
              <h4>Builder 360 Nepal</h4>
              <p>
                CASTBOX LIMITED Coliemore Road, Dalkey, Co. Dublin
                009779851987653
              </p>
              <p>contact@buildr360.com</p>
            </div>
            <div className="col-6"></div>
            <div className="col-3 footerlink">
              <h4>Follow Us</h4>
              <Nav>
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
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 copyright">
            <p>© 2019. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    );
  }
}


