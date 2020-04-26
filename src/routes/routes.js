import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import About from "../pages/About";
import Testimonials from "../pages/Testimonials";
import Contact from "../pages/Contact";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/testimonials" component={Testimonials} />
      <Route exact path="/contact" component={Contact} />
      <Redirect from="*" to="/home" />
    </Switch>
  );
};

export default Routes;
