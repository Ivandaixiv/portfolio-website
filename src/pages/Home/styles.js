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
});
export default styles;
