import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

// @ts-ignore
const workListStyles = makeStyles<Theme>((theme) => ({
  cardContainer: {
    margin: "40px",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    gap: "20px 20px",
  },
}));

export { workListStyles };
