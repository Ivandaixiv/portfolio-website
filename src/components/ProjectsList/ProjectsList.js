import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { List, ListItem, Link } from "@material-ui/core";
const ProjectsList = ({ classes, setSelectedProject, data }) => {
  return (
    <>
      <h2>Featured Projects</h2>
      <List>
        {data.map((project, index) => {
          console.log("project:", project);
          return (
            <ListItem key={index}>
              <Link
                onClick={() => {
                  setSelectedProject(project);
                }}
              >
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
