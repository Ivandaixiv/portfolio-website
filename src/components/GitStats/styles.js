import { createStyles } from "@material-ui/styles";
const styles = createStyles({
  container: {
    background: "#14A76C",
    color: "white",
    display: "flex",
    justifyContent: "space-around",
    width: "60vw",
    borderRadius: "5px",
    margin: "100px auto",
    boxShadow: "5px 2px 20px #14A76C",
  },
  githubContainer: {
    alignSelf: "center",
  },
  github: {
    width: 100,
    height: 100,
  },
  section: {
    textAlign: "center",

    "& p": {
      fontSize: 24,
      fontWeight: 500,
    },
  },
});
export default styles;
