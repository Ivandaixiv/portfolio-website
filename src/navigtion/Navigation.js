import React, { useState } from "react";
import PropTypes from "prop-types";
import MdCompass from "react-ionicons/lib/MdCompass";
import MdFolder from "react-ionicons/lib/MdFolder";
import MdPerson from "react-ionicons/lib/MdPerson";
import MdChatbubbles from "react-ionicons/lib/MdChatbubbles";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import IconButton from "@material-ui/core/IconButton";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const Navigation = (props) => {
  const { classes } = props;
  const [state, setState] = React.useState({
    left: false,
  });
  const [Shake, setShake] = useState(true);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          <IconButton size="small">
            <MdFolder className={classes.icon} />
          </IconButton>
        </ListItem>
        <ListItem>
          <IconButton size="small">
            <MdPerson className={classes.icon} />
          </IconButton>
        </ListItem>
        <ListItem>
          <IconButton size="small">
            <MdFolder className={classes.icon} />
          </IconButton>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <>
        <IconButton size="small" onClick={toggleDrawer("left", true)}>
          <MdCompass className={classes.icon} />
        </IconButton>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
        <div className={classes.iconContainer}>
          <IconButton size="small">
            <MdChatbubbles
              className={classes.icon}
              shake={Shake}
              color="white"
              onClick={() => {
                alert("This feature is coming soon...");
                setShake(false);
              }}
            />
          </IconButton>
        </div>
      </>
    </div>
  );
};

export default withStyles(styles)(Navigation);

Navigation.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
};
