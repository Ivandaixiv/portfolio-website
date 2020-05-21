import { createStyles } from "@material-ui/styles";
const styles = createStyles({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  navigation: {
    zIndex: 2,
    background: "#14A76C",
    height: 80,
    position: "fixed",
    width: "100vw",
  },
  iconContainer: {
    position: "fixed",
    background: "#14A76C",
    top: 10,
    right: 10,
    boxShadow: "2px 2px 10px #14A76C",
  },
  icon: {
    padding: 10,
    width: 35,
    height: 35,
  },
  list: {
    width: 250,
    background: "#14A76C",
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
    position: "fixed",
    top: 10,
    left: 10,
    background: "#14A76C",
    boxShadow: "2px 2px 10px #14A76C",
  },
  compass: {
    padding: 10,
    width: 35,
    height: 35,
  },
});
export default styles;
