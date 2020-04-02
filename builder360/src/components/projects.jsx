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
          <h2 className="projectHead">Projects</h2>

          <CardGroup>
            <Card className="cardOverlay">
              <Card.Img variant="top" src="assets/pro1.jpg" />
              <Card.Body>
                <Card.Title className="textOverlay">
                  Himshikhar Agro Farm
                </Card.Title>
              </Card.Body>
            </Card>
            <Card className="cardOverlay">
              <Card.Img variant="top" src="assets/pro2.jpg" />
              <Card.Body>
                <Card.Title className="textOverlay">In Progress...</Card.Title>
              </Card.Body>
            </Card>
            <Card className="cardOverlay card-lastchild">
              <Card.Img variant="top" src="assets/pro3.jpg" />
              <Card.Body>
                <Card.Title className="textOverlay">In Progress...</Card.Title>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>
      </main>
    );
  }
}
