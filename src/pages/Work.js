import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//import images

import portfolio from "../Images/Portfolio.png";
import ocat from "../Images/OcatAssessment.png";

//animations
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnimation,
  lineAnimation,
  slider,
  sliderContainer,
} from "../animation";
import { useScroll } from "../components/UseScroll";
import ScrollTop from "../components/ScrollTop";

const Work = () => {
  const [elements, controls] = useScroll();
  const [elements2, controls2] = useScroll();
  return (
    <StyledWork
      style={{ background: "#fff" }}
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Movie>
        <motion.h2 variants={fade}>Personal Portfolio</motion.h2>
        <div className="line"></div>
        <Link to="/work/portfolio">
          <Hide>
            <motion.img
              variants={photoAnimation}
              src={portfolio}
              alt="goodtimes"
            />
          </Hide>
        </Link>
      </Movie>
      <Movie>
        <motion.h2 variants={fade}>OCAT Project</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/ocat">
          <Hide>
            <motion.img variants={photoAnimation} src={ocat} alt="athlete" />
          </Hide>
        </Link>
      </Movie>
      <ScrollTop />
    </StyledWork>
  );
};

const StyledWork = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  @media (max-width: 1000px) {
    padding: 2rem 2rem;
  }

  h2 {
    padding: 1rem 0rem;
  }
`;
const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #66fcf1;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: contain;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
  background: #66fcf1;
`;

export default Work;
