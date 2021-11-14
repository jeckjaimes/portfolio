import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

const iconMediaButtonStyles = makeStyles<Theme>((theme) => ({
  link: {
    fontSize: "2rem",
    margin: "0 1.5vw",
    textDecoration: "none",
    color: theme.palette.text.primary,
    "&:visited": {
      textDecoration: "none",
      color: theme.palette.text.primary,
    },
  },
  icon: {
    fontSize: "2rem",
    "&:hover": {
      color: theme.palette.primary.main,
      cursor: "pointer",
    },
  },
}));

export { iconMediaButtonStyles };
