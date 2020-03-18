import React, { Component } from "react";
import { Slide , Zoom
 } from 'react-slideshow-image';
import "./cover.css";


const images = [
    'assets/cover1.jpg',
    'assets/cover2.jpg',
    'assets/cover3.jpg'
]
const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    scale: 0.4,
    pauseOnHover: true,
    onChange: (oldIndex, newIndex) => {
      console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
  }

export default class cover extends Component {
  render() {
    return (
        <div className="slide-container">
             
       
        <Zoom {...properties}>
          {
            images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
          }
        </Zoom>

        {/* <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}> */}
            </div>
        
      
    )}
}
