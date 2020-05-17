import { createStyles } from "@material-ui/styles";
const styles = createStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    justifyContent: "center",
    width: "100%",
  },
  hero: {
    display: "flex",
    justifyContent: "space-around",
    alignSelf: "center",
    width: "100%",
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
  },
  introduction: {
    display: "flex",
    justifyContent: "space-around",
    alignSelf: "center",
    maxWidth: "80vw",
    width: "70vw",
    color: "white",
  },
  profile: {
    alignSelf: "center",
    maxHeight: 500,
    maxWidth: 500,
    borderRadius: "50%",
    boxShadow: "5px 2px 10px #151515",
  },
  sliderTitle: {
    margin: "0 auto",
  },
});
export default styles;
