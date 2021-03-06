import React, { Component } from "react";
import { Fade } from "react-slideshow-image";
import "./cover.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const images = ["assets/cover1.jpg", "assets/cover2.jpg", "assets/cover4.jpg"];
const properties = {
  duration: 2000,
  transitionDuration: 4000,
  infinite: true,
  indicators: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
};

export default class cover extends Component {
  render() {
    return (
      <div className="slide-container">
        <div className="coverBanner">
          <img id="banner" src="assets/covertext.png" alt="" />
        </div>
        <div id="scroll-info">
          <a href="/home">ENTER</a>
          <div id="scroll-info-line">
            <div></div>
          </div>
        </div>

        <Fade {...properties}>
          <div className="image-container">
            <img src={images[0]} />
          </div>
          <div className="image-container">
            <img src={images[1]} />
          </div>
          <div className="image-container">
            <img src={images[2]} />
          </div>
        </Fade>
      </div>
    );
  }
}
