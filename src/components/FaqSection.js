import React from "react";
import { isElement } from "react-dom/test-utils";
import styled from "styled-components";
import { About } from "../styles";
import { useScroll } from "./UseScroll";
import { scrollReveal } from "../animation";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <h2>
        Education and Relevant <span>Experience</span>
      </h2>
      <div className="question">
        <h4>Education</h4>
        <div className="answer">
          <p>University of Cincinnati. Master's of Information Technology.</p>
          <p>
            Pennsylvania State University. Bachelor's of Science, Life Science.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Software Development Internship, UC IT Solutions Center</h4>
        <div className="answer">
          <p>Followed agile methodology of the Software Development Cycle</p>
          <p>
            Implemented performance optimization on PostgreSQL database to
            increase by performance up to 90%.
          </p>
          <p>
            Resolved technical issues in Risk Assessment Application used by
            multiple government agencies
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0 rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
