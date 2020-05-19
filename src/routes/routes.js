import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/portfolio-website" component={Home} />
      <Route exact path="/projects" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Redirect from="*" to="/home" />
    </Switch>
  );
};

export default Routes;
