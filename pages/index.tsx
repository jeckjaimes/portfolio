import React, { FunctionComponent, Dispatch, SetStateAction } from "react";
import About from "../src/components/sections/About";
import Principal from "../src/components/sections/Principal";
import Works from "../src/components/sections/Works";
import Contact from "../src/components/sections/Contact";
import Footer from "../src/components/sections/Footer";
import MyDrawer from "../src/components/general/MyDrawer";
import CssBaseline from "@mui/material/CssBaseline";

type ComponentProps = {
  darkTheme: boolean;
  setDarkTheme: Dispatch<SetStateAction<boolean>>;
};

const Index: FunctionComponent<ComponentProps> = ({
  darkTheme,
  setDarkTheme,
}) => {
  return (
    <>
      <CssBaseline />
      <MyDrawer darkTheme={darkTheme} setDarkTheme={setDarkTheme}>
        <Principal />
        <About />
        <Works />
        <Contact />
        <Footer />
      </MyDrawer>
    </>
  );
};

export default Index;
