import { createStyles } from "@material-ui/styles";
const styles = createStyles({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  iconContainer: {
    position: "absolute",
    background: "#24305E",
    top: 10,
    right: 10,
    boxShadow: "2px 2px 10px #24305E",
  },
  icon: {
    padding: 10,
    width: 30,
    height: 30,
  },
  list: {
    width: 250,
    background: "#24305E",
    height: "100%",
  },
  button: {
    minWidth: 200,
    textAlign: "left",
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
  fullList: {
    width: "auto",
  },
  compassContainer: {
    position: "absolute",
    top: 10,
    left: 10,
    background: "#24305E",
    boxShadow: "2px 2px 10px #24305E",
  },
  compass: {
    padding: 10,
    width: 30,
    height: 30,
  },
});
export default styles;
