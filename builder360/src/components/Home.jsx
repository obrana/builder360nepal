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
        {/* Profile Section */}
        <div className="row sectionFirst">
          <div className="col-6"></div>
          <div className="col-6 sectionRight">
            <h2>Builder 360 Nepal</h2>
            <h4>Affordable, Renewable, Natural, Buildable</h4>
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
        {/* Profile Section */}

        {/* Building Types Section */}

        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <h2 className="customHead">Building Types</h2>

          <Row className="buildingtabs">
            <Col sm={6}>
              <Nav variant="pills">
                <Nav.Link eventKey="first">
                  <img src="assets/typeA.jpg" alt="" />
                </Nav.Link>
                <Nav.Link eventKey="second">
                  <img src="assets/typeA.jpg" alt="" />
                </Nav.Link>

                <Nav.Link eventKey="third">
                  <img src="assets/typeA.jpg" alt="" />
                </Nav.Link>

                <Nav.Link eventKey="fourth">
                  <img src="assets/typeA.jpg" alt="" />
                </Nav.Link>
              </Nav>
            </Col>
            <Col sm={6}>
              <Tab.Content>
                <h4 className="smallHead">
                  SHORTEN THE DESIGN PROCESS AND CHOOSE ON OF OUR ARCHITECTURAL
                  HOUSE TYPES.
                </h4>

                <Tab.Pane eventKey="first">
                  <h5>A. The Town House</h5>
                  <p>
                    The Town House is a very popular form of housing in
                    Denmark.This is a well executed one and a half or two
                    stories housing type, inspired by classic Danish housing
                    architecture.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <h5>A. The Compact House</h5>
                  <p>
                    Rectangular in shape, the Compact House has very beautiful
                    features. The geometry of this kind of housing is very
                    cost-effective, stylish and structural.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <h5>A. The Angle House</h5>
                  <p>
                    The Angle House is a great choice for people who love to
                    separate personal and social space. The bedrooms and living
                    areas can be divided and yard space can be created in this
                    housing type.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <h5>A. The Funkis House</h5>
                  <p>
                    The Funkis House is quite similar in layout to the classic
                    Nepalese homes. It has a flat roof and normally built in
                    double stories.
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
        {/* Buidling Types Section */}
      </main>
    );
  }
}
