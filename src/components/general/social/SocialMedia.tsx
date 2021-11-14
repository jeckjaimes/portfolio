import IconMediaButton from "./IconMediaButton";
import { socialMedias } from "../../../utils/constants";
import { TSocialMedia } from "../../../utils/types";
import { socialMediaStyles } from "../../../styles/components/generals/social/SocialMedia";

const SocialMedia = () => {
  const classes = socialMediaStyles();
  return (
    <div className={classes.container}>
      {socialMedias.map(({ title, link, icon }: TSocialMedia, index) => (
        <IconMediaButton key={index} title={title} link={link} icon={icon} />
      ))}
    </div>
  );
};

export default SocialMedia;
