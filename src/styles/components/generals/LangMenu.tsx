import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

const langMenuStyles = makeStyles<Theme>((theme) => ({
  menuButton: {
    padding: "10px 0",
    fontSize: "1rem",
    textTransform: "uppercase",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      transition: theme.transitions.create(["backgroundColor", "color"], {
        duration: 500,
      }),
      backgroundColor: "rgba(0,0,0,0.3)",
    },
  },
}));

export { langMenuStyles };
