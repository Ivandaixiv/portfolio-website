import React, { useState } from "react";
import profile from "../../assets/ivandai.jpg";
import Lance from "../../assets/lance.jpg";
import Ringo from "../../assets/ringo.jpg";
import Introduction from "../../components/Introduction";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import Slider from "infinite-react-carousel";

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
      <h1>Heres what people had to say</h1>
      <Slider dots>
        <div className={classes.slide}>
          <p className={classes.slideText}>
            The amount of talent Ivan has astounded me. Ivan and I worked on
            many projects together at Red Academy. His ability to solve and
            navigate coding problems is impressive to see. As a team member,
            Ivan has my highest recommendation. It was a pleasure working with
            you Ivan.
          </p>
          <h2 className={classes.slideName}>Lance Patterson</h2>
          <img
            src={Lance}
            alt="Lance Patterson"
            className={classes.testimonialImage}
          />
        </div>
        <div className={classes.slide}>
          <p className={classes.slideText}>
            I had a great time working with Ivan during our Meteor-React
            project. He's extremely efficient with his work process and was
            crushing the assignments in our time together. He is someone that
            you can depend on and I definitely recommend him.
          </p>
          <h2 className={classes.slideName}>Ringo Wong</h2>
          <img
            src={Ringo}
            alt="Ringo Wong"
            className={classes.testimonialImage}
          />
        </div>
      </Slider>
    </div>
  ) : (
    <div className={classes.container}>
      <div className={classes.introduction}>
        <img src={profile} alt="Ivan Dai" className={classes.profile} />
        <Introduction />
      </div>
      <h1>Heres what people had to say</h1>
      <Slider dots autoplay autoplaySpeed={5000}>
        <div className={classes.slide}>
          <p className={classes.slideText}>
            The amount of talent Ivan has astounded me. Ivan and I worked on
            many projects together at Red Academy. His ability to solve and
            navigate coding problems is impressive to see. As a team member,
            Ivan has my highest recommendation. It was a pleasure working with
            you Ivan.
          </p>
          <h2 className={classes.slideName}>Lance Patterson</h2>
          <img
            src={Lance}
            alt="Lance Patterson"
            className={classes.testimonialImage}
          />
        </div>
        <div className={classes.slide}>
          <p className={classes.slideText}>
            I had a great time working with Ivan during our Meteor-React
            project. He's extremely efficient with his work process and was
            crushing the assignments in our time together. He is someone that
            you can depend on and I definitely recommend him.
          </p>
          <h2 className={classes.slideName}>Ringo Wong</h2>
          <img
            src={Ringo}
            alt="Ringo Wong"
            className={classes.testimonialImage}
          />
        </div>
        <div>
          <p>
            More information can be found on my{" "}
            <a
              href="https://www.linkedin.com/in/ivan-dai/"
              className={classes.link}
            >
              Linkedin
            </a>{" "}
          </p>
        </div>
      </Slider>
    </div>
  );
};

Home.propTypes = {};

export default withStyles(styles)(Home);
