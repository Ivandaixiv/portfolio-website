import React, { useState } from "react";
import PropTypes from "prop-types";
import MdCompass from "react-ionicons/lib/MdCompass";
import MdFolder from "react-ionicons/lib/MdFolder";
import MdPerson from "react-ionicons/lib/MdPerson";
import IosHome from "react-ionicons/lib/IosHome";
import IosMail from "react-ionicons/lib/IosMail";
import MdChatbubbles from "react-ionicons/lib/MdChatbubbles";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import clsx from "clsx";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";

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
          <Link to="/home">
            <Button className={classes.button}>
              <IosHome className={classes.icon} color="white" />
              <ListItemText className={classes.link} primary="Home" />
            </Button>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/projects">
            <Button className={classes.button}>
              <MdFolder className={classes.icon} color="white" />
              <ListItemText className={classes.link} primary="Projects" />
            </Button>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/contact">
            <Button className={classes.button}>
              <IosMail className={classes.icon} color="white" />
              <ListItemText className={classes.link} primary="Contact" />
            </Button>
          </Link>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <>
        <div className={classes.compassContainer}>
          <Button size="small" onClick={toggleDrawer("left", true)}>
            <MdCompass className={classes.compass} color="white" />
          </Button>
        </div>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
        <div className={classes.iconContainer}>
          <Button size="small">
            <MdChatbubbles
              className={classes.icon}
              shake={Shake}
              color="white"
              onClick={() => {
                alert("This feature is coming soon...");
                setShake(false);
              }}
            />
          </Button>
        </div>
      </>
    </div>
  );
};

export default withStyles(styles)(Navigation);

Navigation.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
};
