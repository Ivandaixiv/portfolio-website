import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const Introduction = () => {
  return (
    <>
      <h1>Ivan Dai</h1>
      <p>
        Hello My Name is <span>Ivan Dai</span>
      </p>
      <p>I am Web/App Developer</p>
      <List>
        <h2>My Stack Includes</h2>
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
    </>
  );
};

export default Introduction;
