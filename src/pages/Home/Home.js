import React, { useState } from "react";
import profile from "../../assets/ivandai.jpg";
import Introduction from "../../components/Introduction";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import Testimonials from "../../components/Testimonials";
import GitStats from "../../components/GitStats";
const Home = ({ classes, data }) => {
  const [device, setDevice] = useState(
    window.innerWidth >= 600 ? "desktop" : "mobile"
  );

  window.addEventListener("resize", () => {
    window.innerWidth >= 600 ? setDevice("desktop") : setDevice("mobile");
  });
  return device === "mobile" ? (
    <div className={classes.container}>
      <img src={profile} alt="Ivan Dai" className={classes.profile} />
      <Introduction />
      <h1>Heres what people had to say</h1>
    </div>
  ) : (
    <div className={classes.container}>
      <div className={classes.introduction}>
        <img src={profile} alt="Ivan Dai" className={classes.profile} />
        <Introduction />
      </div>
      <GitStats data={data} />
      <h1 className={classes.sliderTitle}>Heres what people had to say</h1>
      <Testimonials />
    </div>
  );
};

Home.propTypes = {};

export default withStyles(styles)(Home);
