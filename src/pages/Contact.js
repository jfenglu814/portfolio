import React from "react";
//animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnimation } from "../animation";
import styled from "styled-components";

const Contact = () => {
  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnimation}>Get in Touch.</motion.h2>
        </Hide>
      </Title>
      <Hide>
        <Social variants={titleAnimation}>
          <Circle />
          <h2>lufg@mail.uc.edu</h2>
        </Social>
      </Hide>
      <Hide>
        <Social variants={titleAnimation}>
          <Circle />
          <a href="https://www.linkedin.com/in/jeffrey-feng-l-7389271b4">
            <h2>linkedin</h2>
          </a>
        </Social>
      </Hide>
      <Hide>
        <Social variants={titleAnimation}>
          <Circle />
          <a href="https://github.com/jfenglu814">
            <h2>github</h2>
          </a>
        </Social>
      </Hide>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1000px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
  @media (max-width: 1000px) {
    margin-top: 5rem;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;

export default Contact;
