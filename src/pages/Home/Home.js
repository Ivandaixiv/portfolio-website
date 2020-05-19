import React, { useState } from "react";
import profile from "../../assets/ivandai.jpg";
import Introduction from "../../components/Introduction";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import Testimonials from "../../components/Testimonials";
import GitStats from "../../components/GitStats";
import ScienceWorld from "../../assets/scienceworld.jpg";
import Fade from "react-reveal/Fade";
const Home = ({ classes, data, events }) => {
  const [device, setDevice] = useState(
    window.innerWidth >= 600 ? "desktop" : "mobile"
  );

  window.addEventListener("resize", () => {
    window.innerWidth >= 600 ? setDevice("desktop") : setDevice("mobile");
  });
  return device === "mobile" ? (
    <div className={classes.container}>
      <div
        className={classes.hero}
        style={{ backgroundImage: `url(${ScienceWorld})` }}
      >
        <div className={classes.introduction}>
          <Fade top>
            <Introduction />
          </Fade>
          <Fade right>
            <img src={profile} alt="Ivan Dai" className={classes.profile} />
          </Fade>
        </div>
      </div>
      <GitStats data={data} events={events} />
      <h1 className={classes.sliderTitle}>Heres what people had to say</h1>
      <Testimonials />
    </div>
  ) : (
    <div className={classes.container}>
      <div
        className={classes.hero}
        style={{ backgroundImage: `url(${ScienceWorld})` }}
      >
        <div className={classes.introduction}>
          <Fade top>
            <Introduction />
          </Fade>
          <Fade right>
            <img src={profile} alt="Ivan Dai" className={classes.profile} />
          </Fade>
        </div>
      </div>
      <GitStats data={data} events={events} />
      <h1 className={classes.sliderTitle}>Heres what people had to say</h1>
      {/* <Testimonials /> */}
    </div>
  );
};

Home.propTypes = {};

export default withStyles(styles)(Home);
