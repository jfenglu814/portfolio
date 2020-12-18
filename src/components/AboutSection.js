import React from "react";
import home1 from "../img/home1.png";
import About from "../Images/About.jpg";
import styled from "styled-components";

const AboutSection = () => {
  return (
    <StyledAbout>
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
        <img src={About} alt="guy with camera" />
      </Image>
    </StyledAbout>
  );
};

//styled components
const StyledAbout = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;
const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;
const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
