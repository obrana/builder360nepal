import React, { Component } from "react";
import { Jumbotron, Button, Col, Row, Container } from "react-bootstrap";
import { Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import Card, { CardBody } from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import data from "../data.json";
import "./buildingProcess.css";
import CardGroup from "react-bootstrap/CardGroup";

export default class buildingProcess extends Component {
  render() {
    return (
      <main>
        <Row className="processA">
          <Col md={4}>
            <h2 className="customHead">Building Process</h2>
            <p id="subTitle">A high performance bio-based building system</p>
          </Col>
          <Col md={8}>
            <CardGroup>
              <Card>
                <Card.Img variant="top" src="assets/processA.jpg" />
                <Card.Body>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="assets/processB.jpg" />
                <Card.Body>

                </Card.Body>
              </Card>

            </CardGroup>
          </Col>
        </Row>
        <Row className="processB">
          {data.Process.map((process, i) => {
            return (
              <Col md={6}>
                <CardGroup>
                  <Card>
                    <Card.Body>
                      <div className="processTitle">{process.title}</div>
                      <Card.Text>{process.details}</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Col>
            );
          })}

        </Row>

      </main>
    );
  }
}
