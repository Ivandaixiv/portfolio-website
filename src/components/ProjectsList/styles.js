import { createStyles } from "@material-ui/styles";
const styles = createStyles({
  projects: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },
  projectsContainer: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "column",
    height: "75vh",
  },
  projectCardContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  projectCard: {
    display: "flex",
    color: "white",
    background: "#14A76C",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "2px solid black",
    width: 200,
    height: 200,
    transition: "1s",
    "&:hover": {
      textDecoration: "none",
      background: "#f44339",
    },
  },
  icon: {
    transform: "scale(1.5)",
  },
  title: {
    alignSelf: "center",
  },
});
export default styles;
