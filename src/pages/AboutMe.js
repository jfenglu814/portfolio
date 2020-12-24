import React from "react";

import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import FaqSection from "../components/FaqSection";
import GetInTouch from "../components/GetInTouch";

//animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

import ScrollTop from "../components/ScrollTop";

const AboutMe = () => {
  return (
    <motion.div
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <AboutSection />
      <SkillsSection />
      <FaqSection />
      <ScrollTop />
    </motion.div>
  );
};

export default AboutMe;
