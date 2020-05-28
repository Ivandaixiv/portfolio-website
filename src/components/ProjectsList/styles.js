import { createStyles } from "@material-ui/styles";
const styles = createStyles({
  projects: {
    display: "flex",
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
});
export default styles;
