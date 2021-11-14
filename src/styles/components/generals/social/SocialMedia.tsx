import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

// @ts-ignore
const socialMediaStyles = makeStyles<Theme>((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export { socialMediaStyles };
