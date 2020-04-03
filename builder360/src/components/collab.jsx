import React, { Component } from "react";
import { Jumbotron, Button, Col, Row, Container } from "react-bootstrap";
import { Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import "./collab.css";

export default class collab extends Component {
  render() {
    return (
      <main>
        {/* Collab Section */}
        <h2 className="collaborateHead">Collaborate with us</h2>

        <Row className="collab">
          <Col md={6}>
            <Image src="assets/collab.png"></Image>
          </Col>

          <Col md={6}>
            <h4 className="collabHead">Tell Us about yourself:</h4>
            <Form>
              <Form.Group controlId="ControlInput">
                <Form.Control type="email" placeholder="Name" />
              </Form.Group>
              <Form.Group controlId="ControlInput">
                <Form.Control type="email" placeholder="Email Address" />
              </Form.Group>
              <Form.Group controlId="ControlInput">
                <Form.Control type="email" placeholder="Address" />
              </Form.Group>
              <Form.Group controlId="ControlInput">
                <Form.Control type="email" placeholder="Phone Number" />
              </Form.Group>

              <Form.Group controlId="ControlInput">
                <Form.Control
                  as="textarea"
                  placeholder="Your Message Here"
                  rows="5"
                />
              </Form.Group>
              <Button type="submit">Send</Button>
            </Form>
          </Col>
        </Row>
        {/* Collab Section */}
      </main>
    );
  }
}
