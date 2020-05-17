import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

const Introduction = ({ classes }) => {
  return (
    <div>
      <h2 className={classes.name}>IVAN DAI</h2>
      <p className={classes.text}>
        Hello I am Ivan. I am Web/App Developer based in Beautiful British
        Columbia.
      </p>
    </div>
  );
};

export default withStyles(styles)(Introduction);
