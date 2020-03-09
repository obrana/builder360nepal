import React, { Component } from "react";
import "./cover.css";

export default class Cover extends Component {
  render() {
    return (
      <div id="contents-wrap">
        <div id="contents">
          <div id="top" class="content">
            <div id="stage">
              <div id="site-name">We are builder 360 Nepal</div>
              <ul id="images">


                <li><img src={'assets/cover1.jpg'} alt="top01" /></li>
                <li><img src={'assets/cover2.jpg'} alt="top01" /></li>
                <li><img src={'assets/cover3.jpg'} alt="top01" /></li>

              </ul>

              <div id="scroll-info">
                <a href="/">scroll</a>
                <div id="scroll-info-line">
                  <div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>

    )

  }
}
