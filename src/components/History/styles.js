import { createStyles } from "@material-ui/styles";
const styles = createStyles({
  container: {
    // background: "#e39f1c",
    display: "flex",
    padding: "80px 25%",
    background: "#f44339",
    justifyContent: "center",
    color: "white",
  },
  textContainer: {
    margin: 20,
  },
  text: {
    fontWeight: 500,
    lineHeight: "2rem",
    width: 600,
  },
  photoContainer: {
    position: "relative",
    height: "100%",
  },
  photo: {
    boxShadow: "10px 10px 20px #151515",
    borderRadius: 5,
    height: 400,
  },
  hoverTextContainer: {
    opacity: 0.8,
    background: "black",
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontWeight: 500,
  },
  hoverText: {
    position: "absolute",
    transform: "translate(-50%, -50%)",
    width: 400,
    top: "50%",
    left: "50%",
  },
});
export default styles;
