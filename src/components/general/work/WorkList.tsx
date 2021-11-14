import { FunctionComponent } from "react";
import WorkCard from "./WorkCard";
import { workListStyles } from "../../../styles/components/generals/work/WorkList";
import { works } from "../../../utils/constants";

const WorkList: FunctionComponent = () => {
  const classes = workListStyles();
  return (
    <div className={classes.cardContainer}>
      {works.map((work, index) => (
        <WorkCard key={index} />
      ))}
    </div>
  );
};

export default WorkList;
