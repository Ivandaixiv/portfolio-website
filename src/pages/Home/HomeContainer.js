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

  async componentDidMount() {
    localStorage.getItem("stats") === null
      ? fetch("https://api.github.com/users/Ivandaixiv")
          .then((results) => {
            return results.json();
          })
          .then((data) => {
            localStorage.setItem("stats", JSON.stringify(data));
            this.setState({ stats: data });
          })
      : await this.setState({
          stats: JSON.parse(localStorage.getItem("stats")),
        });

    localStorage.getItem("events") === null
      ? fetch("https://api.github.com/users/Ivandaixiv/events/public")
          .then((results) => {
            return results.json();
          })
          .then((data) => {
            localStorage.setItem("events", JSON.stringify(data));
            this.setState({ events: data });
          })
      : await this.setState({
          events: JSON.parse(localStorage.getItem("events")),
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
