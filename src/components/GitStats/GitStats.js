import React from "react";
import Github from "react-ionicons/lib/LogoGithub";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
const GitStats = ({ classes, data, events }) => {
  let recentCommits = 0;
  let recentActivities = events.length;
  const newEvents = events.filter((event) => event.type.match("PushEvent"));
  newEvents.forEach((event) => {
    recentCommits += event.payload.commits.length;
  });
  return (
    <div className={classes.container}>
      <Github color="white" className={classes.github} />
      <div className={classes.section}>
        <h2>Public Projects</h2>
        <p> {data.public_repos}</p>
      </div>
      <div className={classes.section}>
        <h2>Followers</h2>
        <p> {data.followers}</p>
      </div>
      <div className={classes.section}>
        <h2>Recent Commits</h2>
        <p> {recentCommits}</p>
      </div>
      <div className={classes.section}>
        <h2>Recent Push/Pulls</h2>
        <p> {recentActivities}</p>
      </div>
    </div>
  );
};

export default withStyles(styles)(GitStats);
