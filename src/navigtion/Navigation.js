import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import MdReorder from "react-ionicons/lib/MdReorder";
import MdChatbubbles from "react-ionicons/lib/MdChatbubbles";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

const Navigation = props => {
  const [Shake, setShake] = useState(true);
  const { classes } = props;
  return (
    <div className={classes.root}>
      <div>
        <MdReorder className={classes.icon} color="white" />
      </div>
      <div>
        <MdChatbubbles
          className={classes.icon}
          shake={Shake}
          color="white"
          onClick={() => {
            alert("This feature is coming soon...");
            setShake(false);
          }}
        />
      </div>
    </div>
  );
};

Navigation.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string)
};

export default withStyles(styles)(Navigation);
