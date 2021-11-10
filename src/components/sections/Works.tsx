import React from "react";
import { worksStyles } from "../../styles/components/sections/Works";
import { Typography } from "@mui/material";
import { useIntl } from "react-intl";

const Works = () => {
  // @ts-ignore
  const classes = worksStyles();
  const { formatMessage: f } = useIntl();
  return (
    <>
      <Typography>{f({ id: "work" })}</Typography>
    </>
  );
};

export default Works;
