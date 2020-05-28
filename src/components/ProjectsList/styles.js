import { createStyles } from "@material-ui/styles";
const styles = createStyles({
  projects: {
    display: "flex",
  },
  projectsContainer: {
    display: "flex",
    width: "100vw",
    flexDirection: "column",
  },
  projectCardContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "100vw",
    overflow: "hidden",
  },
  projectCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "2px solid black",
    width: 200,
    height: 200,
  },
  icon: {
    transform: "scale(1.5)",
  },
  title: {
    alignSelf: "center",
  },
});
export default styles;
