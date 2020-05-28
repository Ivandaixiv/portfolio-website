import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { List, ListItem, Link } from "@material-ui/core";
import Phone from "react-ionicons/lib/IosPhonePortrait";
import Laptop from "react-ionicons/lib/IosLaptop";
import Unknown from "react-ionicons/lib/IosPhotos";
import Github from "react-ionicons/lib/LogoGithub";
const ProjectsList = ({ classes, setSelectedProject, data }) => {
  const handleCard = (project) => {
    if (project.type === "App") {
      return <Phone className={classes.icon} />;
    } else if (project.type === "Website") {
      return <Laptop className={classes.icon} />;
    } else {
      return <Unknown className={classes.icon} />;
    }
  };
  return (
    <div className={classes.projectsContainer}>
      <h2 className={classes.title}>Featured Projects</h2>
      <List className={classes.projects}>
        {data.map((project, index) => {
          return (
            <ListItem key={index} className={classes.projectCardContainer}>
              {project.type === "Link" ? (
                <a href={project.github} className={classes.projectCard}>
                  <h2>More Projects!</h2>
                  <Github className={classes.icon} />
                </a>
              ) : (
                <Link
                  onClick={() => {
                    setSelectedProject(project);
                  }}
                  className={classes.projectCard}
                >
                  <h2>{project.name}</h2>
                  {handleCard(project)}
                </Link>
              )}
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default withStyles(styles)(ProjectsList);
