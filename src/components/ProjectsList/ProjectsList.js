import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { List, ListItem, Link } from "@material-ui/core";
import Phone from "react-ionicons/lib/IosPhonePortrait";
import Laptop from "react-ionicons/lib/IosLaptop";
const ProjectsList = ({ classes, setSelectedProject, data }) => {
  return (
    <>
      <h2>Featured Projects</h2>
      <List className={classes.projects}>
        {data.map((project, index) => {
          return (
            <ListItem key={index}>
              <Link
                onClick={() => {
                  setSelectedProject(project);
                }}
              >
                {project.type === "app" ? <Phone /> : <Laptop />}
                <h2>{project.name}</h2>
              </Link>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default withStyles(styles)(ProjectsList);
