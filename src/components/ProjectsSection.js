import React from 'react';
//Import Icons
import clock from '../img/clock.svg';
import diaphram from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png'

const ProjectsSection = () => {
    return (
        <div className="services">
          <div className="description">
            <h2>High <span>quality</span> services</h2>
            <div className="cards">
              <div className="card">
                <div className="icon">
                  <img src={clock} alt="project1"/>
                  <h3>Efficient</h3>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="card">
                <div className="icon">
                  <img src={teamwork} alt="project2"/>
                  <h3>Teamwork</h3>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="card">
                <div className="icon">
                  <img src={diaphram} alt="project3"/>
                  <h3>Diaphram</h3>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="card">
                <div className="icon">
                  <img src={money} alt="project4"/>
                  <h3>Affordable</h3>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
          <div className="image">
            <img src={home2} alt="picture"/>
          </div>
        </div>
      );
}
 
export default ProjectsSection;