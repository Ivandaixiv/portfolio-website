import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import Fade from "react-reveal/Fade";
import ProjectsList from "../ProjectsList";
const Projects = ({ classes, data, events }) => {
  return (
    <Fade>
      <div>
        <h2>Featured</h2>
      </div>
      <div>
        <ProjectsList />
      </div>
    </Fade>
  );
};

export default withStyles(styles)(Projects);
