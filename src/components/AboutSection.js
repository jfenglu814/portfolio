import React from "react";
import { Link } from "react-router-dom";

//import images
import home1 from "../img/home1.png";
import AboutImage from "../Images/About.jpg";

import { About, Description, Image, Hide } from "../styles";

//Framer Motion
import { motion } from "framer-motion";
import { titleAnimation, fade, photoAnimation } from "../animation";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnimation}>Working to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          I'm an MSIT student, with a software development focus, working to
          better understand how to leverage rapidly changing technologies to
          create positive change in our planet. My friends and colleagues would
          describe me as a highly driven, imaginative individual who enjoys
          being challenged with new concepts and ideas. I see technology, not as
          an end product, but as a tool to generate solutions to relevant
          problems.
        </motion.p>
        <Link to="/contact">
          <motion.button variants={fade}>Contact</motion.button>
        </Link>
      </Description>
      <Image>
        <motion.img
          variants={photoAnimation}
          initial="hidden"
          animate="show"
          src={AboutImage}
          alt="guy with camera"
        />
      </Image>
    </About>
  );
};

//styled components

export default AboutSection;
