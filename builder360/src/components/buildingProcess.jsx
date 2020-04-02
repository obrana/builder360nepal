import React, { Component } from "react";
import { Jumbotron, Button, Col, Row, Container } from "react-bootstrap";
import { Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import Card, { CardBody } from "react-bootstrap/Card";
import data from "../data.json";
import "./buildingProcess.css";
import CardGroup from "react-bootstrap/CardGroup";

export default class buildingProcess extends Component {
  render() {
    return (
      <main>
        <Row className="processA">
          <Col md={6}>
            <h2 className="customHead">Building Process</h2>
            {/* <p id="subTitle">A high performance bio-based building system</p> */}
          </Col>
          <Col md={6}>
            <div className="process">
              <p className="pText">
                ONE COHERENT AND OPTIMIZED PROCESS FROM THE FIRST SKETCH TO THE FINISHED HOUSE.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="processB">
          {data.Process.map((process, i) => {
            return (
              <Col md={3}>
                <CardGroup>
                  <Card>
                    <Card.Body>
                
                      <div className="processTitle">{process.title}
                      </div>
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
