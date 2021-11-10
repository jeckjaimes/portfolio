import React from "react";
import { contactStyles } from "../../styles/components/sections/Contact";
import { Typography } from "@mui/material";
import { useIntl } from "react-intl";

const Contact = () => {
  // @ts-ignore
  const classes = contactStyles();
  const { formatMessage: f } = useIntl();
  return (
    <>
      <Typography>{f({ id: "contact" })}</Typography>
    </>
  );
};

export default Contact;
