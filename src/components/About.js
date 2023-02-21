import React, { useEffect } from 'react';
import { aboutSections } from '../portfolio';
import { Link } from "react-router-dom";
import profilephoto from '../images/DSC_5731.jpg'

const About = () => {
    useEffect(() => {
        document.title = "About"
    }, []);
    return (
        <section className="about-container">
            <div className="container">
                <div className="one">
                    <span className="heading">{aboutSections.aboutheading}</span>
                </div>
                <div className="u-container-layout">
                    <div className="image-box">
                        <img alt="karthikeyan" src={profilephoto} className="u-image" />
                        <h1>{aboutSections.aboutname}</h1>
                        <div className="resume-btn">
                            <Link to="/resume" className="main-btn">Resume </Link>
                        </div>
                    </div>
                    <div className="content-section">
                        <h2>{aboutSections.aboutrole}</h2>
                        <p>{aboutSections.description}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About