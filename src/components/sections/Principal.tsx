import React from "react";
import { principalStyles } from "../../styles/components/sections/Principal";
import { Button, Typography } from "@mui/material";
import { useIntl } from "react-intl";

const Principal = () => {
  const classes = principalStyles();
  const { formatMessage: f } = useIntl();
  return (
    <div className={classes.container}>
      <Typography className={classes.title}>
        {f({ id: "principalTitleFirst" })}
      </Typography>
      <Typography className={classes.title}>
        {f({ id: "principalTitleSecond" })}
      </Typography>
      <Typography className={classes.subtitle}>
        {f({ id: "principalSubtitle" })}
      </Typography>
      <Button
        className={classes.btn}
        size="large"
        variant="contained"
        color="primary"
        disableElevation
      >
        {f({ id: "principalButton" })}
      </Button>
    </div>
  );
};

export default Principal;
