import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import Fade from "react-reveal/Fade";
import ProjectsList from "../ProjectsList";
import Voicestory from "../../assets/voicestory.gif";
const Projects = ({ classes }) => {
  const data = [
    {
      name: "Voicestory 2020",
      video: Voicestory,
    },
  ];
  const [selectedProject, setSelectedProject] = useState(data[0]);

  return (
    <Fade>
      <div>
        <h2>Featured</h2>
        <p>{selectedProject.name}</p>
        <img
          src={selectedProject.video}
          alt={selectedProject.name}
          style={{ borderRadius: 40 }}
        />
      </div>
      <div>
        <ProjectsList setSelectedProject={setSelectedProject} data={data} />
      </div>
    </Fade>
  );
};

export default withStyles(styles)(Projects);
