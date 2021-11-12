import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

type StyleProps = {
  open: boolean;
};

const myDrawerStyles = makeStyles<Theme, StyleProps>((theme) => ({
  content: {
    //background: "url(/principal.png) center/cover no-repeat",
    paddingLeft: (props) => (props.open ? 180 : 60),
    transition: theme.transitions.create("padding-left", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
}));

export { myDrawerStyles };
