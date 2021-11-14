import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

const iconMediaButtonStyles = makeStyles<Theme>((theme) => ({
  link: {
    fontSize: "2rem",
    margin: "0 1.5vw",
    textDecoration: "none",
  },
  icon: {
    fontSize: "2rem",
    color: "#dcdcdc",
    "&:hover": {
      color: theme.palette.primary.main,
      cursor: "pointer",
    },
  },
}));

export { iconMediaButtonStyles };
