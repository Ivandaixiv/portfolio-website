import React, { useState } from "react";
import PropTypes from "prop-types";
import MdCompass from "react-ionicons/lib/MdCompass";
import MdFolder from "react-ionicons/lib/MdFolder";
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
import Fade from "react-reveal/Fade";
const Navigation = (props) => {
  const { classes } = props;
  const [scroll, setScroll] = useState(false);
  const navbar = document.getElementById("navbar");
  let sticky = navbar != null && navbar.offsetTop;
  window.addEventListener("scroll", () => {
    checkPosition();
  });
  const checkPosition = () => {
    if (window.pageYOffset > sticky + 200) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  const [state, setState] = React.useState({
    top: false,
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
    <Fade top duration={250} spy={window.pageYOffset}>
      <div id="navbar" className={scroll && classes.navigation}>
        <div className={classes.compassContainer}>
          <Button size="small" onClick={toggleDrawer("top", true)}>
            <MdCompass
              className={classes.compass}
              color="white"
              rotate={true}
            />
          </Button>
        </div>
        <Drawer
          anchor={"top"}
          open={state["top"]}
          onClose={toggleDrawer("top", false)}
        >
          {list("top")}
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
      </div>
    </Fade>
  );
};

export default withStyles(styles)(Navigation);

Navigation.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
};
