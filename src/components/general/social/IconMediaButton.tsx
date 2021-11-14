import { FunctionComponent } from "react";
import { Tooltip } from "@mui/material";
import { iconMediaButtonStyles } from "../../../styles/components/generals/social/IconMediaButton";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

type ComponentProps = {
  title: string;
  link: string;
  icon: string;
};

const IconMediaButton: FunctionComponent<ComponentProps> = ({
  title,
  link,
  icon,
}) => {
  const classes = iconMediaButtonStyles();

  const icons = {
    instagram: <InstagramIcon className={classes.icon} />,
    email: <EmailIcon className={classes.icon} />,
    whatsapp: <WhatsAppIcon className={classes.icon} />,
    linkedin: <LinkedInIcon className={classes.icon} />,
  };

  // @ts-ignore
  const iconDisplay = icons[icon];

  return (
    <Tooltip placement="top" title={title}>
      <a className={classes.link} href={link} target="_blank">
        {iconDisplay}
      </a>
    </Tooltip>
  );
};

export default IconMediaButton;
