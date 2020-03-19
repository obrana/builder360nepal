import React, { Component } from "react";
import { Jumbotron, Button, Col, Row, Container } from "react-bootstrap";
import { Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";

import "./buildingProcess.css";

export default class buildingProcess extends Component {
  render() {
    return (
      <main>
          
          {/* Building Process Section */}
          <Row className="processA">
            <Col xs={6}>
              <Image src="assets/processA.jpg"></Image>
            </Col>

            <Col xs={6}>
              <h2 className="customHead">Building Process</h2>
              <p id="subTitle">A high performance bio-based building system</p>
            </Col>
          </Row>
          <Row className="processB">
            <Col xs={6}>
              <CardColumns>
                <Card>
                  <Card.Body>
                    <Card.Title>Affordable</Card.Title>
                    <Card.Text>
                      A cost-effective and digital building system developed for
                      high precision and rapid assembly. Keep track of building
                      costs with the buildr plug-in software.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    <Card.Title>Renewable</Card.Title>
                    <Card.Text>
                      Building pods are constructed from only renewable
                      resources. Choose from wood or straw fiber boards and
                      store huge amounts of carbon in your house.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    <Card.Title>Natural</Card.Title>
                    <Card.Text>
                      Natural materials has great insulation properties and emit
                      no hazardous chemicals. This provides a fresh and healthy
                      indoor air climate in your house.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    <Card.Title>Buildable</Card.Title>
                    <Card.Text>
                      Modular and intelligent building pods are self locating
                      and easy to install. Parts are coded for fast and simple
                      installation with a step-by-step instruction manual.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardColumns>
            </Col>

            <Col xs={6}>
              <Image src="assets/processB.jpg" />
            </Col>
          </Row>
          {/* Building Process Section */}
          
      </main>
    );
  }
}
