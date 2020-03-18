import React, { Component } from "react";
import {
  Slide, Zoom, Fade
} from 'react-slideshow-image';
import "./cover.css";


const images = [
  'assets/cover1.jpg',
  'assets/cover2.jpg',
  'assets/cover3.jpg'
]
const properties = {
  duration: 3000,
  transitionDuration: 4000,
  infinite: true,
  indicators: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}

export default class cover extends Component {
  render() {
    return (
      <div className="slide-container">
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



    )
  }
}
