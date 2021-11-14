import { FunctionComponent } from "react";
import { workCardStyles } from "../../../styles/components/generals/work/WorkCard";

type ComponentProps = {
  work: any;
};

const WorkCard: FunctionComponent<ComponentProps> = ({ work }) => {
  const classes = workCardStyles();
  return <div className={classes.container}>{work}</div>;
};

export default WorkCard;
