import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Button, Col, Row, Sonnet } from "react-bootstrap";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import TabContainer from "react-bootstrap/TabContainer";
import TabContent from "react-bootstrap/TabContent";
import TabPane from "react-bootstrap/TabPane";
import { Navbar, Nav, NavDropdown, Image } from "react-bootstrap";

import "./home.css";

export default class Home extends Component {
  render() {
    return (
      <main>
        <Jumbotron>
          <h2 className="introtext">
            A New Generation Of Modular Architecture
          </h2>
        </Jumbotron>

        <div className="row sectionFirst">
          <div className="col-6"></div>
          <div className="col-6 sectionRight">
            <h2>Builder 360 Nepal</h2>
            <h3>Affordable, Renewable, Natural, Buildable</h3>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">abcd </Tab.Pane>
                    <Tab.Pane eventKey="second">abcde </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </div>
      </main>
    );
  }
}
