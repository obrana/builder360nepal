import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Cover from "./components/Cover";



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
    
                  <Switch>
                    <Route exact path="/" component={Cover} />
                    <Route exact path="/home" component={Home} />
                  </Switch>
          
       
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
