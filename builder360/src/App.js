import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Cover from "./components/Cover";
import Navbar from "./components/CustomNavbar";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <Router>
           <Route exact path="/" component={Cover} />
        <div>
       
          <Route exact path="/home" component={Home} />
          <Navbar />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
