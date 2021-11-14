import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

// @ts-ignore
const sectionStyles = makeStyles<Theme>((theme) => ({
  container: {
    margin: "30px 0",
    minHeight: "100vh",
  },
  title: {
    fontSize: "40px",
    fontWeight: "bold",
  },
}));

export { sectionStyles };
