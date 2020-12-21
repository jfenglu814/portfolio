import React from "react";
//Import Icons
import clock from "../img/clock.svg";
import diaphram from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

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
              <img src={clock} alt="project1" />
              <h3>Languages</h3>
            </div>
            <p>Java ,Python, C, Swift, JavaScript</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="project2" />
              <h3>Frameworks/Libraries</h3>
            </div>
            <p>Reactjs, Nodejs, Expressjs</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphram} alt="project3" />
              <h3>Databases</h3>
            </div>
            <p>PostgreSQL, Microsoft SQLServer</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="project4" />
              <h3>Other</h3>
            </div>
            <p>Git, Linux</p>
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
  @media (max-width: 1300px) {
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
