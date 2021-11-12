import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

// @ts-ignore
const principalStyles = makeStyles<Theme>((theme) => ({
  container: {
    height: "100vh",
    padding: "22vh 15vw",
  },
  title: {
    fontSize: "45px",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "25px",
  },
  btn: {
    marginTop: "20px",
    fontSize: "18px",
    fontWeight: 700,
    //borderRadius: "15px",
  },
}));

export { principalStyles };
