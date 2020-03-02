import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Button } from "react-bootstrap";
import "./home.css";

export default class Home extends Component {
  render() {
    return (
      <Jumbotron>
        <h2>We are Builder Three Sixty Nepal</h2>
        <p>stop reading this!</p>
        <Link to="/about">
          <Button bsStyle="primary">Learn More</Button>
        </Link>
      </Jumbotron>
    );
  }
}
