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
              <Row className="profiletabs">
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first">The Concept</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Sustainability</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Surroundings</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      Builder 360 is a concept designed to build sustainable and
                      flexible housing for our clients who entrust us to deliver
                      the projects that will build their futures. Inspired by
                      Danish architecture, our homes are designed with advanced
                      3D technology and follow the digital building concept
                      BUILDR. Based on a renewable and resource efficient model,
                      we are committed to designing and building projects with
                      breathable materials of superior quality and value that
                      result in exceptional customer satisfaction and trust.
                      This is not only cost-effective in terms of construction
                      costs but also reduces the heavy manual labour.
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      Modern digital tools and automatic manufacturing systems
                      have created this unique building technique that has
                      transformed the building process for sustainable future
                      generation. Our homes do not require concrete foundation
                      and are built with certified woods that encourages
                      reduction in CO2 emission in the environment. The use of
                      locally extracted woods maintains a healthy atmosphere at
                      home and also keeps it free from rodents.
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      Use of natural resources means no hazardous properties in
                      the environment. Natural wood fibers work as an insulation
                      which creates a healthy atmosphere by providing humidity
                      and heat regulating properties. Our homes breathe and
                      ventilate themselves naturally which, as a result, gives
                      you a fresh, happier and healthier place to live in.
                    </Tab.Pane>
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
