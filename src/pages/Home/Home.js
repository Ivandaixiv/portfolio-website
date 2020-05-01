import React, { useState } from "react";
import PropTypes from "prop-types";
import profile from "../../assets/ivandai.jpg";
import { withStyles } from "@material-ui/core/styles";
import Introduction from "../../components/Introduction";
import styles from "./styles";

const Home = (props) => {
  const [device, setDevice] = useState(
    window.innerWidth >= 600 ? "desktop" : "mobile"
  );

  window.addEventListener("resize", () => {
    window.innerWidth >= 600 ? setDevice("desktop") : setDevice("mobile");
  });
  const { classes } = props;
  return device === "mobile" ? (
    <div className={classes.container}>
      <img src={profile} alt="Ivan Dai" className={classes.profile} />
      <Introduction />
    </div>
  ) : (
    <div className={classes.container}>
      <img src={profile} alt="Ivan Dai" />
      <Introduction />
    </div>
  );
};

Home.propTypes = {};

export default withStyles(styles)(Home);
