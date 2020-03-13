import React, { Component } from "react";
import "./cover.css";

// export default class Cover extends Component {
//   render() {
//     return (
//       <div id="contents-wrap">
//         <div id="contents">
//           <div id="top" class="content">
//             <div id="stage">
//               <div id="site-name">We are builder 360 Nepal</div>
//               <ul id="images">

//                 <li><img src={'assets/cover1.jpg'} alt="top01" /></li>
//                 <li><img src={'assets/cover2.jpg'} alt="top01" /></li>
//                 <li><img src={'assets/cover3.jpg'} alt="top01" /></li>

      //           <li><img src={'assets/cover1.jpg'} alt="top01" /></li>
      //           <li><img src={'assets/cover2.jpg'} alt="top01" /></li>
      //           <li><img src={'assets/cover3.jpg'} alt="top01" /></li>

      //         </ul>

      //         <div id="scroll-info">
      //           <a href="/Home">scroll</a>
      //           <div id="scroll-info-line">
      //             <div>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //       <script src="/common/js/index.js" type="text/javascript"></script>

      //     </div>
      //   </div>
      // </div>

//   }
// }
const pics = ["assets/cover1.jpg", "assets/cover2.jpg", "assets/cover3.jpg"];

export default class Cover extends Component {
 
  state = {
    image: undefined,
    loading: true,
  }
  
  timeline = new TimelineMax()
  imageWrapper = React.createRef()
  imageElement = React.createRef()

  componentDidMount() {
   this.getRandomImage();
  }
  
  startLoading = () => {
   this.timeline.clear();
   
   this.timeline.to(this.imageWrapper.current, 0.4, { 
     css: { scale: 0.8, rotation: '0deg' }, 
     onComplete: this.getRandomImage,
   }).play();
  }
 
  getRandomImage = () => {
    const image = new Image();
    this.setState({ loading: true });
    
    image.onload = () => {
      this.timeline.to(this.imageElement.current, 0.4, { css: { opacity: 0 }, onComplete: () => this.setImage(image) });
    }
    
    image.src = `https://source.unsplash.com/random/1920x1080&cb=${Date.now()}`;
  }
  
  setImage = (image) => {
   this.setState({ loading: false, image: image.src }, this.showImage);
  }
  
  showImage = () => {
    const randomRotation = Math.round(Math.random() * 3) - 2;
   
    this.timeline.to(this.imageElement.current, 0.3, { css: { opacity: 1 }}).play();
    this.timeline.to(this.imageWrapper.current, 0.3, { css: { scale: 1 }}, 0).play();
   
    this.timeline.to(this.imageWrapper.current, 16, { css: { scale: 1.2, rotation: `${randomRotation}deg` }, onComplete: this.startLoading }).play();
  }
  
  render() {
    return (
      <div className="wrapper">
        
        <div className="copyright">
          <p>Pedro Lima © 2019 - Images by Unsplash</p>
        </div>
        
        {this.state.loading &&
            <div className="spinner">
              <div className="double-bounce1"></div>
              <div className="double-bounce2"></div>
            </div>
        }
        
        <div className="slides__wrapper">
          
          <div className="slide" ref={this.imageWrapper}>
            <img ref={this.imageElement} src={this.state.image} />
          </div>
        
        </div>
      

      </div>
    );
  }
}