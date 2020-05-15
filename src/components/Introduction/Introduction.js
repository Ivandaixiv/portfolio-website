import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

const Introduction = ({ classes }) => {
  return (
    <div>
      <h2 className={classes.name}>Ivan Dai</h2>
      <p className={classes.text}>Hello I am Ivan. I am Web/App Developer</p>
      <List>
        <ListItem>
          <ListItemText>React / React Native</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>NodeJS</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>GraphQL</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>PostgreSQL</ListItemText>
        </ListItem>
      </List>
    </div>
  );
};

export default withStyles(styles)(Introduction);
