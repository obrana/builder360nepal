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
  constructor(props) {
    super(props);
    const idxStart = 0;
    this.state = {
      index: idxStart,
      next: this.getNextIndex(idxStart),
      move: false
    };
  }

  getNextIndex(idx) {
    if (idx >= pics.length - 1) {
      return 0;
    }
    return idx + 1;
  }

  setIndexes(idx) {
    this.setState({
      index: idx,
      next: this.getNextIndex(idx)
    });
  }
  componentDidMount() {
    setInterval(() => {
      // on
      this.setState({
        move: true
      });
      // off
      setTimeout(() => {
        this.setState({
          move: false
        });
        this.setIndexes(this.getNextIndex(this.state.index));
      }, 500); // same delay as in the css transition here
    }, 2000);
  }
  render() {
    const move = this.state.move ? "move" : "";
    if (this.state.move) {
    }
    return (
      <div className="mask">
        <div className="pic-wrapper">
          <div className={`current pic ${move}`}>
            <img src={pics[this.state.index]} alt="" />
          </div>
          <div className={`next pic ${move}`}>
            <img src={pics[this.state.next]} alt="" />
          </div>
        </div>
      </div>
    );
  }
}
