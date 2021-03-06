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
          <p>University of Cincinnati. MS, Information Technology</p>
          <p>
            Pennsylvania State University. Bachelor's of Science, Life Science.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Digital Technology Intern, GE Aviation</h4>
        <div className="answer">
          <p>
            Headed the QA effort in the development of a FedRAMP ServiceNow
            instance for a space within GE Aviation.
          </p>
          <p>
            Administered the testing and validation of over 115 user stories.
          </p>
          <p>
            Delivered test plans for 5 development sprints and 1 UAT sprint.
          </p>
          <p>
            Authored training materials for Ops personnel on the implementation
            of the FedRamp ServiceNow instance.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Software Development Internship, UC IT Solutions Center</h4>
        <div className="answer">
          <p>
            Collaborated with a global Agile team doing full-stack development
            using React, Node, and PostgreSQL.
          </p>
          <p>
            Developed and implemented feature requests from clients involving UI
            changes and complex data integration.
          </p>
          <p>
            Designed index and optimized queries for database performance tuning
            yielding up to a 90% increase in performance.
          </p>
          <p>
            Supported the migration of the flagship Risk Assessment application
            from Angular to React..
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
