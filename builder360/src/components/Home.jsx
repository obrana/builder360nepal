import React, { Component } from "react";
import { Jumbotron, Button, Col, Row, Container } from "react-bootstrap";
import { Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "../components/Footer";
import CustomNavbar from "../components/CustomNavbar";
import Profile from "../components/profile";
import BuildingTypes from "../components/buildingTypes";
import BuildingProcess from "../components/buildingProcess";
import Collab from "../components/collab";
import "./home.css";

export default class Home extends Component {
  render() {
    return (
      <main>
        <Router>
          <CustomNavbar />
        </Router>
        <Container>
          <Jumbotron>
            <h2 className="introtext">
              A New Generation Of Modular Architecture
            </h2>
          </Jumbotron>
          {/* Profile Section */}
          <Profile/>
          {/* Profile Section */}
          {/* Building Types Section */}
         <BuildingTypes/>
          {/* Buidling Types Section */}
          {/* Building Process Section */}
          <BuildingProcess/>
          {/* Building Process Section */}
          {/* Collab Section */}
          <Collab/>
          {/* Collab Section */}
        </Container>
        <Router>
          <Footer />
        </Router>
      </main>
    );
  }
}
