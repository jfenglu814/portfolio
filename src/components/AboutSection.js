import React from "react";

//import images
import home1 from "../img/home1.png";
import AboutImage from "../Images/About.jpg";

import { About, Description, Image, Hide } from "../styles";

//Framer Motion
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <motion.h2
              animate={{ opacity: 1, transition: { duration: 2 } }}
              initial={{ opacity: 0 }}
            >
              Working to make
            </motion.h2>
          </Hide>
          <Hide>
            <h2>
              <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
        <p>Contact me for any questions.</p>
        <button>Contact</button>
      </Description>
      <Image>
        <img src={AboutImage} alt="guy with camera" />
      </Image>
    </About>
  );
};

//styled components

export default AboutSection;
