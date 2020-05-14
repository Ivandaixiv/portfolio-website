import { createStyles } from "@material-ui/styles";
const styles = createStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100vw",
    alignSelf: "center",
    justifyContent: "center",
  },
  introduction: {
    display: "flex",
    justifyContent: "space-around",
    maxWidth: "80vw",
    alignSelf: "center",
    width: "70vw",
  },
  profile: {
    alignSelf: "center",
    maxHeight: 300,
    maxWidth: 300,
    borderRadius: "50%",
  },
  testimonialImage: {
    maxWidth: 75,
    borderRadius: "50%",
  },
  sliderTitle: {
    margin: "0 auto",
  },
  slide: {
    padding: "50px 0",
    textAlign: "center",
  },
  slideLinkedin: {
    marginTop: 100,
    textAlign: "center",
  },
  slideText: {
    width: "25%",
    margin: "0 auto",
  },
});
export default styles;
