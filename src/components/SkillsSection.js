import React from "react";
//Import Icons
import home2 from "../Images/Home2.png";
import database from "../Images/database.svg";
import react from "../Images/react.svg";
import java from "../Images/java.svg";
import git from "../Images/git.svg";

//Styles
import { About, Description, Image } from "../styles";
import styled from "styled-components";

import { useScroll } from "./UseScroll";
import { scrollReveal } from "../animation";

const SkillsSection = () => {
  const [element, controls] = useScroll();
  return (
    <Skills
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Description>
        <h2>
          <span>Technical</span> Skills
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={java} alt="project1" />
              <h3>Languages</h3>
            </div>
            <p>Java ,Python, C, Swift, JavaScript</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={react} alt="project2" />
              <h3>Frameworks/Libraries</h3>
            </div>
            <p>Reactjs, Nodejs, Expressjs</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={database} alt="project3" />
              <h3>Databases</h3>
            </div>
            <p>PostgreSQL, Microsoft SQLServer</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={git} alt="project4" />
              <h3>Other</h3>
            </div>
            <p>AWS Lambda, AWS SNS, Git, Linux</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="picture" />
      </Image>
    </Skills>
  );
};

const Skills = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1000px) {
    justify-content: center;
  }
`;
const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      padding: 1rem;
    }
  }
`;
export default SkillsSection;
