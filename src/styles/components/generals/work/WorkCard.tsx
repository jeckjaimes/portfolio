import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

// @ts-ignore
const workCardStyles = makeStyles<Theme>((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    width: "30%",
    height: "auto",
    minHeight: "250px",
    borderRadius: "10px",
    padding: theme.spacing(2),
  },
}));

export { workCardStyles };
