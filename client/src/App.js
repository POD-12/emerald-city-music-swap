import React, { Component } from "react";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./pages/Signup"

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Signup} />
      </Router>
    );
  }
}

export default App;
