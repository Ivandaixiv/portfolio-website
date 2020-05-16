import React from "react";
import Github from "react-ionicons/lib/LogoGithub";
const GitStats = ({ classes, data, events }) => {
  let recentCommits = 0;
  let recentActivities = events.length;
  const newEvents = events.filter((event) => event.type.match("PushEvent"));
  newEvents.forEach((event) => {
    recentCommits += event.payload.commits.length;
  });
  return (
    <div>
      <Github />
      <p>Public Projects: {data.public_repos}</p>
      <p>Followers: {data.followers}</p>
      <p>Recent Commits: {recentCommits}</p>
      <p>Recent Activities: {recentActivities}</p>
    </div>
  );
};

export default GitStats;
