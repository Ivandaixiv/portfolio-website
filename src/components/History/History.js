import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
const History = ({ classes }) => {
  return (
    <div className={classes.container}>
      <h2>How I got here</h2>
      <p>
        It was during high school when programming was first introduced to me.
        Ever since then I have not stopped pursuing programming both as hobby
        and as a career by teaching myself programming with the help of
        Treehouse, Youtube and reading documentation. My background has always
        been in the technologies area. I started with volunteering at Free Geek
        during my high school days and eventually I joined Profusion
        Technologies and picked up many meaningful skills in hardware and
        networking, which I am very grateful to have been given the opportunity
        to learn from. However, my eyes always drew back to the software side of
        things, leading me to RED Academy. RED is where I finally had a deeper
        dive into development. RED taught me not just programming, it also
        taught me to make meaningful connections and most importantly learning
        how to learn. It is during my time at RED that I began participating
        more in the Vancouver developer communities, such as React Vancouver and
        Nodeschool. Its safe to say after all this my home belongs in the
        British Columbia's Tech Sector. Feel free to reach out to me for any
        more information or upcoming opportunities!
      </p>
    </div>
  );
};

export default withStyles(styles)(History);
