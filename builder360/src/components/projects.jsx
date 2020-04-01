import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

import "./projects.css";

export default class Project extends Component {
  render() {
    return (
      <main>
        <div id="projects">
          <h2 className="customHead">Projects</h2>

          <CardGroup>
            <Card>
              <Card.Img variant="top" src="assets/pro1.jpg" />
              <Card.Body>
                <Card.Title>Himshikhar Agro Farm</Card.Title>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src="assets/pro2.jpg" />
              <Card.Body>
                <Card.Title>Project 2</Card.Title>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src="assets/pro3.jpg" />
              <Card.Body>
                <Card.Title>Project 3</Card.Title>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>
      </main>
    );
  }
}
