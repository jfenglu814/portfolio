import React from 'react';
import home1 from '../img/home1.png';
import styled from 'styled-components';

const AboutSection = () => {
    return (  
        <StyledAbout>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>We work to make</h2>
                    </div>
                    <div className="hide">
                        <h2>
                            your <span>dreams</span> come
                        </h2>
                    </div>
                    <div className="hide">
                        <h2>true.</h2>
                    </div>
                </div>
                <p>Contact me for any questions.</p>
            </div>
            <div className="image">
                <div className="image">
                    <img src={home1} alt="guy with camera"/>
                </div>
            </div>
        </StyledAbout>
    );
}
 
//styled components
const StyledAbout = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
`

export default AboutSection;