import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Cover from "./components/Cover";
import {
  CSSTransition,
  TransitionGroup,
  Transition
} from 'react-transition-group';
import {play , exit } from "./timelines"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
              <Route render={({location}) => (
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    timeout={450}
                    classNames="fade"
                  >
                  <Switch location={location}>
                    <Route exact path="/" component={Cover} />
                    <Route exact path="/home" component={Home} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}/>
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
