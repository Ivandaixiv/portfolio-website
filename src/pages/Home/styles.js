import { createStyles } from "@material-ui/styles";
const styles = createStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100vw",
    alignSelf: "center",
    justifyContent: "center",
  },
  profile: {
    maxWidth: 300,
    borderRadius: "50%",
    border: "2px solid black",
  },
  testimonialImage: {
    maxWidth: 75,
    borderRadius: "50%",
  },
});
export default styles;
