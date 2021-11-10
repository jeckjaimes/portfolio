import React from "react";
import { principalStyles } from "../../styles/components/sections/Principal";
import { Typography } from "@mui/material";
import { useIntl } from "react-intl";

const Principal = () => {
  const classes = principalStyles();
  const { formatMessage: f } = useIntl();
  return (
    <div className={classes.container}>
      <Typography>{f({ id: "principal" })}</Typography>
    </div>
  );
};

export default Principal;
