import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./pages/Signup.js"

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
