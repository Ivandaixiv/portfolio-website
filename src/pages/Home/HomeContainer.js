import React, { Component } from "react";
import Home from "./Home";
class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: "Loading...",
    };
  }
  componentDidMount() {
    fetch("https://api.github.com/users/Ivandaixiv")
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        this.setState({ stats: data });
      });
  }
  render() {
    return (
      <>
        <Home data={this.state.stats} />
      </>
    );
  }
}

export default HomeContainer;
