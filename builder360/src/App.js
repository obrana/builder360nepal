import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Cover from "./components/Cover";
import Navbar from "./components/CustomNavbar";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
         

          
          <Route exact path="/" component={Cover} />
          
          <Route exact path="/" component={Home} />

        </div>
        {/* <Navbar /> */}
      </Router>
    );
  }
}

export default App;
