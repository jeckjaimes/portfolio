import React from "react";
import { useRouter } from "next/router";
import { langMenuStyles } from "../../styles/components/generals/LangMenu";
import { Tooltip } from "@mui/material";
import { useIntl } from "react-intl";

const LangMenu = () => {
  const classes = langMenuStyles();
  const { push: link, locale, locales } = useRouter();
  const { formatMessage: f } = useIntl();

  const handleClick = async () => {
    await link("/", "/", { locale: locales!.find((elem) => elem !== locale) });
  };

  return (
    <div>
      <Tooltip title={f({ id: "languageMessage" })}>
        <div className={classes.menuButton} onClick={handleClick}>
          {locale}
        </div>
      </Tooltip>
    </div>
  );
};

export default LangMenu;
