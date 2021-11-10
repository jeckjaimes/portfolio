import React, { Dispatch, FunctionComponent, SetStateAction } from "react";
import { themeMenuStyles } from "../../styles/components/generals/ThemeMenu";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useIntl } from "react-intl";
import { Tooltip } from "@mui/material";

type ComponentProps = {
  darkTheme: boolean;
  setDarkTheme: Dispatch<SetStateAction<boolean>>;
};

const ThemeMenu: FunctionComponent<ComponentProps> = ({
  darkTheme,
  setDarkTheme,
}) => {
  const classes = themeMenuStyles();
  const { formatMessage: f } = useIntl();

  return (
    <div>
      <Tooltip title={f({ id: "themeMessage" })}>
        <div
          className={classes.menuButton}
          onClick={() => setDarkTheme(!darkTheme)}
        >
          {darkTheme ? (
            <Brightness2Icon className={classes.moonIcon} />
          ) : (
            <Brightness7Icon className={classes.sunIcon} />
          )}
        </div>
      </Tooltip>
    </div>
  );
};

export default ThemeMenu;
