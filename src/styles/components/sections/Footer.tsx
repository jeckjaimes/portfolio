import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

const footerStyles = makeStyles<Theme>((theme) => ({
  container: {
    margin: "40px 0 16px 0",
  },
  link: {
    textDecoration: "none",
    "&:visited": {
      textDecoration: "none",
      color: theme.palette.primary.main,
    },
  },
  copyright: {
    marginTop: "30px",
    fontSize: "12px",
  },
  madeWith: {
    fontSize: "12px",
  },
}));

export { footerStyles };
