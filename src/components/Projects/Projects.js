import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import Fade from "react-reveal/Fade";
import ProjectsList from "../ProjectsList";
import Voicestory from "../../assets/voicestory.gif";
import Boomtown from "../../assets/boomtown.png";
import Coderoad from "../../assets/coderoad.png";
import Inhabitent from "../../assets/inhabitent.png";
import R10 from "../../assets/r10.png";
import { Button } from "@material-ui/core";
const Projects = ({ classes }) => {
  const data = [
    {
      name: "Voicestory 2020",
      media: Voicestory,
      description:
        "The VoiceStory App allows the user to find speakers, videos and events, past or present, at Voicestory in one mobile React Native Application. The user is able to favourite the select video and will be able to read up on the speaker.",
      github: "https://github.com/redacademy/voicestory-winter-2020",
      type: "App",
    },
    {
      name: "Boomtown",
      media: Boomtown,
      description:
        "Boomtown enables a user to borrow items and share items to the boomtown community. All the user has to do is create an account and everything else is already setup. The project uses React.js,Node.js, GraphQL, etc... in the background to manage the database and render content to the screen for the user.",
      github: "https://github.com/Ivandaixiv/boomtown-application",
      type: "Website",
    },
    {
      name: "R10",
      media: R10,
      description:
        "The R10 Conference App allows the user to find everything about the conference in one mobile React Native application. The user is able to favourite the select session their interest it and will be able to read up more on the speaker and their content.",
      github: "https://github.com/Ivandaixiv/react-native-r10",
      type: "App",
    },
    {
      name: "Inhabitent",
      media: Inhabitent,
      description:
        "The Inhabitent WordPress Site uses a custom theme that is based off of the RED Starter Theme. It's main concept is a blog/shop site for camping gear.",
      github: "https://github.com/Ivandaixiv/inhabitent-project",
      type: "Website",
    },
    {
      name: "CodeRoad",
      media: Coderoad,
      description:
        "The CodeRoad WordPress Site uses a custom theme that is based off of the RED Starter Theme. It's main concept is a video/education site for the coderoad Application.",
      github: "https://github.com/Ivandaixiv/coderoad-fall-2019",
      type: "Website",
    },
    {
      name: "Github",
      github: "https://github.com/Ivandaixiv/",
      type: "Link",
    },
  ];
  const [selectedProject, setSelectedProject] = useState(data[0]);

  return (
    <div className={classes.projects}>
      <Fade left>
        <div
          className={
            selectedProject.type === "App"
              ? classes.featuredApp
              : classes.featuredWebsite
          }
        >
          <Fade left spy={selectedProject}>
            <img
              className={
                selectedProject.type === "App" ? classes.app : classes.website
              }
              src={selectedProject.media}
              alt={selectedProject.name}
            />
          </Fade>
          <div className={classes.projectText}>
            <h2>Selected: {selectedProject.name} </h2>
            <p>{selectedProject.description}</p>
            <a href={selectedProject.github}>
              <Button>Check it out!</Button>
            </a>
          </div>
        </div>
      </Fade>
      <Fade right>
        <ProjectsList
          setSelectedProject={setSelectedProject}
          data={data}
          className={classes.projectsList}
        />
      </Fade>
    </div>
  );
};

export default withStyles(styles)(Projects);
