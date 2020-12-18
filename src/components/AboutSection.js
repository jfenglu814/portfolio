import React from "react";

//import images
import home1 from "../img/home1.png";
import AboutImage from "../Images/About.jpg";

import { About, Description, Image, Hide } from "../styles";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>Working to make</h2>
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
