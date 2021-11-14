import { FunctionComponent } from "react";
import { workCardStyles } from "../../../styles/components/generals/work/WorkCard";

const WorkCard: FunctionComponent = () => {
  const classes = workCardStyles();
  return <div className={classes.container} />;
};

export default WorkCard;
