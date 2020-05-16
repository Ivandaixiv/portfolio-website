import React, { Component } from "react";
import Home from "./Home";
class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: [],
      events: [],
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

    fetch("https://api.github.com/users/Ivandaixiv/events/public")
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        this.setState({ events: data });
      });
  }
  render() {
    return (
      <>
        <Home data={this.state.stats} events={this.state.events} />
      </>
    );
  }
}

export default HomeContainer;
