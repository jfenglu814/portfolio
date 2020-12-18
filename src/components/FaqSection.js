import React from "react";
import styled from "styled-components";
import { About } from "../styles";

const FaqSectopm = () => {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>Who am I</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perferendis, quo?
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>What is my background</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perferendis, quo?
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>How Do I Start?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perferendis, quo?
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Let's do it</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perferendis, quo?
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

export default FaqSectopm;
