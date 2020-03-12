import React, { Component } from "react";
import "./App.css";
import Navigation from "./navigtion";
import About from "./pages/About";
import Testimonials from "./pages/Testimonials";
class App extends Component {
  render() {
    return (
      <>
        <Navigation />
        <About />
        <Testimonials />
      </>
    );
  }
}

export default App;
