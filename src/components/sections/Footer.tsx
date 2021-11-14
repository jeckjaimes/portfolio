import React from "react";
import { footerStyles } from "../../styles/components/sections/Footer";
import { Typography } from "@mui/material";
import { useIntl } from "react-intl";
import SocialMedia from "../general/social/SocialMedia";

const Footer = () => {
  // @ts-ignore
  const classes = footerStyles();
  const { formatMessage: f } = useIntl();
  return (
    <div className={classes.container}>
      <SocialMedia />
      <Typography align="center" className={classes.copyright}>
        Ⓒ 2021 Jeckson Jaimes. {f({ id: "copyright" })}
      </Typography>
      <Typography align="center" className={classes.madeWith}>
        {f({ id: "madeWith" })}{" "}
        <a color="primary" href="https://nextjs.org" className={classes.link}>
          Next.js
        </a>
      </Typography>
    </div>
  );
};

export default Footer;
