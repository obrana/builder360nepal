import React, { Component } from "react";
import { Jumbotron, Button, Col, Row, Container } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import { Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import "./buildingTypes.css";
import data from "../data.json";

export default class buildingTypes extends Component {
  render() {
    return (
      <main>
        {/* Building Types Section */}
        <Tab.Container id="building" defaultActiveKey="first">
          <h2 className="customHead">Building Types</h2>

          <Row className="buildingtabs">
            <Col sm={6} className="image-col">
              <Nav variant="pills">
                <Nav.Link eventKey="first">
                  <div class="content">
                    <div class="text">The Town House</div>
                  </div>
                  <img
                    class="img-fluid"
                    height="200"
                    width="200"
                    src="assets/typeA.png"
                    alt=""
                  />
                </Nav.Link>
                <Nav.Link eventKey="second">
                  <div class="content">
                    <div class="text">The Compact House</div>
                  </div>
                  <img
                    class="img-fluid"
                    height="200"
                    width="200"
                    src="assets/typeB.jpg"
                    alt=""
                  />
                </Nav.Link>
                <Nav.Link eventKey="third">
                  <div class="content">
                    <div class="text">The Angle House</div>
                  </div>
                  <img
                    class="img-fluid"
                    height="200"
                    width="200"
                    src="assets/typeC.jpg"
                    alt=""
                  />
                </Nav.Link>

                <Nav.Link eventKey="fourth">
                  <div class="content">
                    <div class="text">The Funkis House</div>
                  </div>
                  <img
                    class="img-fluid"
                    height="200"
                    width="200"
                    src="assets/typeD.jpg"
                    alt=""
                  />
                </Nav.Link>
                {/* <Nav.Link eventKey="first">
                  {data.HouseTypes.map((types, i) => {
                    return (
                      <div>
                        <div>
                          <div class="content">
                            <div class="text">
                              <h6>{types.title}</h6>
                            </div>
                          </div>
                          <img
                            class="img-fluid"
                            height="200"
                            width="200"
                            src={types.img}
                          />
                        </div>
                      </div>
                    );
                  })}
                </Nav.Link> */}
              </Nav>
            </Col>
            <Col sm={6}>
              <Tab.Content>
                <h4 className="smallHead">
                  SHORTEN THE DESIGN PROCESS AND CHOOSE ON OF OUR ARCHITECTURAL
                  HOUSE TYPES.
                </h4>

                <Tab.Pane eventKey="first">
                  <h5> 
                    <span>A.</span> The Town House
                  </h5>
                  <p>
                    The Town House is a very popular form of housing in
                    Denmark.This is a well executed one and a half or two
                    stories housing type, inspired by classic Danish housing
                    architecture.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <h5>
                    <span>B.</span> The Compact House
                  </h5>
                  <p>
                    Rectangular in shape, the Compact House has very beautiful
                    features. The geometry of this kind of housing is very
                    cost-effective, stylish and structural.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <h5>
                    <span>C.</span> The Angle House
                  </h5>
                  <p>
                    The Angle House is a great choice for people who love to
                    separate personal and social space. The bedrooms and living
                    areas can be divided and yard space can be created in this
                    housing type.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <h5>
                    <span>D.</span> The Funkis House
                  </h5>
                  <p>
                    The Funkis House is quite similar in layout to the classic
                    Nepalese homes. It has a flat roof and normally built in
                    double stories.
                  </p>
                </Tab.Pane>

                {/* <Tab.Pane eventKey="first">
                  {data.HouseTypes.map((types, i) => {
                    return (
                      <div>
                        <div>
                          <h5>
                            <span>{types.h}</span> {types.title}
                          </h5>
                          <p>{types.details}</p>
                        </div>
                      </div>
                    );
                  })}
                </Tab.Pane> */}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
        {/* Buidling Types Section */}
        <div className="containerBuilding">
          <div className="buildingHead">
            {/* <h4 className="smallHead">
              SHORTEN THE DESIGN PROCESS AND CHOOSE ON OF OUR ARCHITECTURAL
              HOUSE TYPES.
            </h4> */}

            {data.HouseTypes.map((types, i) => {
              return (
                <div className="Typcontainer">
                  <div class="title">
                    <h5>
                      <span>{types.h}</span>
                      {types.title}
                    </h5>
                  </div>
                  <div class="content1">
                    <div class="text">
                      <p>{types.details}</p>
                    </div>
                  </div>
                  <div className="panel">
                    <img class="img-fluid" src={types.img} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    );
  }
}
