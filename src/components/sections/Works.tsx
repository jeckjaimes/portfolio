import React from "react";
import { worksStyles } from "../../styles/components/sections/Works";
import { useIntl } from "react-intl";
import WorkList from "../general/work/WorkList";
import Section from "../layouts/Section";

const Works = () => {
  // @ts-ignore
  const classes = worksStyles();
  const { formatMessage: f } = useIntl();
  return (
    <Section title={f({ id: "work" })}>
      <WorkList />
    </Section>
  );
};

export default Works;
