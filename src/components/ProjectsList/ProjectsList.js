import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
const ProjectsList = ({ classes, setSelectedProject, data }) => {
  return (
    <ul>
      <li>Yes</li>
      <button
        onClick={() => {
          setSelectedProject({
            name: "NEWWW 2020",
            video: "dsassd",
          });
        }}
      />
      {data.map((project, index) => {
        console.log("project:", project);
      })}
    </ul>
  );
};

export default withStyles(styles)(ProjectsList);
