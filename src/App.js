import React, { Component } from "react";
import "./App.css";
import Navigation from "./navigtion";
import About from "./pages/About";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
class App extends Component {
  render() {
    return (
      <>
        <Navigation />
        <Testimonials />
        <About />
        <Contact />
      </>
    );
  }
}

export default App;
