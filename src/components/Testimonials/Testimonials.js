import React from "react";
import Lance from "../../assets/lance.jpg";
import Ringo from "../../assets/ringo.jpg";
import Slider from "infinite-react-carousel";
import Linkedin from "react-ionicons/lib/LogoLinkedin";
import Arrow from "react-ionicons/lib/MdArrowDropright";
import ArrowBack from "react-ionicons/lib/MdArrowDropleft";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
const Testimonials = ({ classes }) => {
  return (
    <Slider
      prevArrow={<ArrowBack color="#24305E" />}
      nextArrow={<Arrow color="#24305E" />}
      autoplay
      autoplaySpeed={5000}
      className={classes.slideContainer}
    >
      <div className={classes.slide}>
        <p className={classes.slideText}>
          "The amount of talent Ivan has astounded me. Ivan and I worked on many
          projects together at Red Academy. His ability to solve and navigate
          coding problems is impressive to see. As a team member, Ivan has my
          highest recommendation. It was a pleasure working with you Ivan."
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
          "I had a great time working with Ivan during our Meteor-React project.
          He's extremely efficient with his work process and was crushing the
          assignments in our time together. He is someone that you can depend on
          and I definitely recommend him."
        </p>
        <h2 className={classes.slideName}>Ringo Wong</h2>
        <img
          src={Ringo}
          alt="Ringo Wong"
          className={classes.testimonialImage}
        />
      </div>
      <div className={classes.slideLinkedin}>
        <p className={classes.slideText}>
          More information can be found on my Linkedin
        </p>
        <a
          href="https://www.linkedin.com/in/ivan-dai/"
          className={classes.link}
        >
          <Linkedin fontSize="5rem" color="#2867B2" />
        </a>
      </div>
    </Slider>
  );
};

export default withStyles(styles)(Testimonials);
