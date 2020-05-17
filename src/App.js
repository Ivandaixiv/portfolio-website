import React, { Component } from "react";
import "./App.css";
import Navigation from "./navigtion";
import AppRoutes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import Jump from "react-reveal/Jump";
class App extends Component {
  render() {
    return (
      <Router>
        <Jump>
          <Navigation />
        </Jump>
        <AppRoutes />
      </Router>
    );
  }
}

export default App;
