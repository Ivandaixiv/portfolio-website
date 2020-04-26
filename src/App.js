import React, { Component } from "react";
import "./App.css";
import Navigation from "./navigtion";
import AppRoutes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <Navigation />
        <AppRoutes />
      </Router>
    );
  }
}

export default App;
