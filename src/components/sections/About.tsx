import React from "react";
import { aboutStyles } from "../../styles/components/sections/About";
import { Typography } from "@mui/material";
import { useIntl } from "react-intl";

const About = () => {
  // @ts-ignore
  const classes = aboutStyles();
  const { formatMessage: f } = useIntl();
  return (
    <>
      <Typography>{f({ id: "about" })}</Typography>
    </>
  );
};

export default About;
