import * as React from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import CallIcon from "@mui/icons-material/Call";
import { useIntl } from "react-intl";
import LangMenu from "./LangMenu";
import { myDrawerStyles } from "../../styles/components/generals/MyDrawer";
import ThemeMenu from "./ThemeMenu";
import { Dispatch, FunctionComponent, SetStateAction } from "react";

type ComponentProps = {
  darkTheme: boolean;
  setDarkTheme: Dispatch<SetStateAction<boolean>>;
};

const drawerWidth = 180;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  borderRadius: "0 15px 15px 0",
  //backgroundColor: "rgba(236,236,236,0.65)",
  /*background:
    "linear-gradient(135deg, rgba(25,61,148,0.4) 0%, rgba(16,10,96,0.4) 50%, rgba(30,10,87,0.4) 100%)",*/
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  borderRadius: "0 15px 15px 0",
  //backgroundColor: "rgba(236,236,236,0.65)",
  /*background:
    "linear-gradient(135deg, rgba(25,61,148,0.4) 0%, rgba(16,10,96,0.4) 50%, rgba(30,10,87,0.4) 100%)",*/
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(7)} + 1px)`,
  },
});

const DivGrow = styled("div")(() => ({
  flexGrow: 1,
  cursor: "pointer",
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const MyDrawer: FunctionComponent<ComponentProps> = ({
  children,
  darkTheme,
  setDarkTheme,
}) => {
  const { formatMessage: f } = useIntl();
  const [open, setOpen] = React.useState(false);
  const classes = myDrawerStyles({ open });

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "block" }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <ThemeMenu darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <DivGrow onClick={handleDrawer} />
        <List>
          {[
            {
              text: f({ id: "about" }),
              icon: <PersonIcon />,
            },
            {
              text: f({ id: "work" }),
              icon: <WorkIcon />,
            },
            {
              text: f({ id: "contact" }),
              icon: <CallIcon />,
            },
          ].map((elem, index) => (
            <ListItem button key={index}>
              <ListItemIcon>{elem.icon}</ListItemIcon>
              <ListItemText primary={elem.text} />
            </ListItem>
          ))}
        </List>
        <DivGrow onClick={handleDrawer} />
        <LangMenu />
      </Drawer>
      <div className={classes.content}>
        <Box component="main" sx={{ p: 3 }}>
          {children}
        </Box>
      </div>
    </Box>
  );
};

export default MyDrawer;
