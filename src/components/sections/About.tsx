import React from "react";
import { aboutStyles } from "../../styles/components/sections/About";
import { useIntl } from "react-intl";
import Section from "../layouts/Section";

const About = () => {
  // @ts-ignore
  const classes = aboutStyles();
  const { formatMessage: f } = useIntl();
  return (
    <Section title={f({ id: "about" })}>
      <div />
    </Section>
  );
};

export default About;
