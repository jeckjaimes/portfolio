import React from "react";
import { footerStyles } from "../../styles/components/sections/Footer";
import { Typography } from "@mui/material";
import { useIntl } from "react-intl";

const Footer = () => {
  // @ts-ignore
  const classes = footerStyles();
  const { formatMessage: f } = useIntl();
  return <Typography>{f({ id: "footer" })}</Typography>;
};

export default Footer;
