import { FunctionComponent, ReactElement } from "react";
import { sectionStyles } from "../../styles/components/layouts/Section";
import { Typography } from "@mui/material";

type ComponentProps = {
  children: ReactElement;
  title: string;
};

const Section: FunctionComponent<ComponentProps> = ({ children, title }) => {
  const classes = sectionStyles();
  return (
    <div className={classes.container}>
      <div>
        <Typography align="center" className={classes.title}>
          {title}
        </Typography>
        {children}
      </div>
    </div>
  );
};

export default Section;
