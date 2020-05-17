import React from "react";
import Github from "react-ionicons/lib/LogoGithub";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import Fade from "react-reveal/Fade";
const GitStats = ({ classes, data, events, navigation }) => {
  let recentCommits = 0;
  let recentActivities = events.length;
  const newEvents = events.filter((event) => event.type.match("PushEvent"));
  newEvents.forEach((event) => {
    recentCommits += event.payload.commits.length;
  });
  return (
    <div className={classes.container}>
      <a
        href="https://github.com/Ivandaixiv"
        className={classes.githubContainer}
      >
        <Fade top duration={2000}>
          <Github color="white" className={classes.github} />
        </Fade>
      </a>
      <div className={classes.section}>
        <Fade top duration={2000}>
          <h2>Public Projects</h2>
          <p> {data.public_repos}</p>
        </Fade>
      </div>
      <div className={classes.section}>
        <Fade top duration={2000}>
          <h2>Followers</h2>
          <p> {data.followers}</p>
        </Fade>
      </div>
      <div className={classes.section}>
        <Fade top duration={2000}>
          <h2>Recent Commits</h2>
          <p> {recentCommits}</p>
        </Fade>
      </div>
      <div className={classes.section}>
        <Fade top duration={2000}>
          <h2>Recent Push/Pulls</h2>
          <p> {recentActivities}</p>
        </Fade>
      </div>
    </div>
  );
};

export default withStyles(styles)(GitStats);
