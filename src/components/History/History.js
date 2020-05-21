import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import RED from "../../assets/RED.jpg";
import Fade from "react-reveal/Fade";

const History = ({ classes }) => {
  const [hover, setHover] = useState(false);
  return (
    <div className={classes.container}>
      <Fade left>
        <div className={classes.textContainer}>
          <h2>How I got here</h2>
          <p className={classes.text}>
            It was during high school when programming was first introduced to
            me. My background has always been in the technologies area. I
            started with volunteering at Free Geek during my high school days
            and eventually I joined Profusion Technologies and picked up many
            meaningful skills in hardware and networking, which I am very
            grateful to have been given the opportunity to learn from. However,
            my eyes always drew back to the software side of things, leading me
            to RED Academy. RED taught me not just programming, but it also
            taught me to make meaningful connections and most importantly
            learning how to learn on your own. It is during my time at RED that
            I began participating more in the Vancouver developer communities,
            such as React Vancouver and Nodeschool. Its safe to say after all
            this my home belongs in the British Columbia's Tech Sector.
          </p>
        </div>
      </Fade>
      <Fade right>
        <div
          className={classes.photoContainer}
          onMouseOver={() => {
            setHover(true);
          }}
          onMouseOut={() => {
            setHover(false);
          }}
        >
          <img
            src={RED}
            alt="Group shot by Ariel Kew-Ladret"
            className={classes.photo}
          />
          <div
            className={`${classes.hoverTextContainer} ${
              hover && classes.hovered
            }`}
          >
            <h2 className={classes.hoverText}>
              Group photo at RED by Ariel Kew-Ladret
            </h2>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default withStyles(styles)(History);
