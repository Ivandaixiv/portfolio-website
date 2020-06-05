import { createStyles } from "@material-ui/styles";
const styles = createStyles({
  projects: {
    background: "#212121",
    padding: "100px 0vw",
    display: "flex",
    justifyContent: "space-around",
    alignSelf: "center",
    width: "100vw",
    minHeight: "50vw",
    color: "white",
  },
  projectsList: {
    maxWidth: "100%",
  },
  featuredApp: {
    maxWidth: "50vw",
    display: "flex",
    justifyContent: "center",
  },
  featuredWebsite: {
    maxWidth: "50vw",
    maxHeight: "500px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
  },
  app: {
    maxHeight: 700,
    borderRadius: 40,
  },
  website: {
    maxHeight: 500,
    maxWidth: "100%",
  },
  projectText: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "column",
    margin: 30,
    height: "80%",
  },
  button: {
    color: "white",
    background: "#14A76C",
    "&:hover": {
      background: "#f44339",
    },
  },
});
export default styles;
