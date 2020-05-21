import React, { Component } from "react";
import Home from "./Home";
class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: null,
      events: null,
    };
  }

  async componentDidMount() {
    const now = new Date();
    let data = JSON.parse(localStorage.getItem("stats"));
    if (data !== null && now.getTime() > data.expiry) {
      localStorage.removeItem("stats");
    }
    data = JSON.parse(localStorage.getItem("events"));
    if (data !== null && now.getTime() > data.expiry) {
      localStorage.removeItem("events");
    }

    localStorage.getItem("stats") === null
      ? await fetch("https://api.github.com/users/Ivandaixiv")
          .then((results) => {
            return results.json();
          })
          .then((data) => {
            const now = new Date();
            const value = {
              value: data,
              expiry: now.getTime() + 86400000,
            };
            localStorage.setItem("stats", JSON.stringify(value));
            this.setState({ stats: value });
          })
      : await this.setState({
          stats: JSON.parse(localStorage.getItem("stats")),
        });
    localStorage.getItem("events") === null
      ? await fetch("https://api.github.com/users/Ivandaixiv/events/public")
          .then((results) => {
            return results.json();
          })
          .then((data) => {
            const now = new Date();
            const value = {
              value: data,
              expiry: now.getTime() + 86400000,
            };
            localStorage.setItem("events", JSON.stringify(value));
            this.setState({ events: value });
          })
      : await this.setState({
          events: JSON.parse(localStorage.getItem("events")),
        });
  }
  render() {
    return (
      <>
        {this.state.stats !== null && this.state.events !== null ? (
          <Home
            data={this.state.stats.value}
            events={this.state.events.value}
          />
        ) : (
          <p>Loading...</p>
        )}
      </>
    );
  }
}

export default HomeContainer;
