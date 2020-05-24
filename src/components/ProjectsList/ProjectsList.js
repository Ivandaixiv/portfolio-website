import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
const ProjectsList = ({ classes, setSelectedProject }) => {
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
    </ul>
  );
};

export default withStyles(styles)(ProjectsList);