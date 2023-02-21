import React, { useEffect } from 'react';
import { skillsSections } from '../portfolio';

const Skills = () => {

    useEffect(() => {
        document.title = "Skills"
    }, []);

    const SkillsItems = ({ i, item }) => {
        return (
            <div className="bar" key={i}>
                <div className="info">
                    <span>{item.name}</span>
                </div>
                <div className="progress-line"><span className={item.level}></span></div>
            </div>
        )
    }

    const ImageItems = ({ i, item }) => {
        return (
            <div className="slide" key={i}>
                <img src={item.imageIconUrl} alt={item.languageName} />
            </div>
        )
    }
    return (
        <>
            <section className="technical-container">
                <div className="one">
                    <span className="heading">Technical skills</span>
                </div>
                <div className="container">
                    <span className="heading">SKILLS</span>
                    <div className="skills-section-responsive">
                        <div className="skill-section">
                            <div className="skills">
                                <div className="skills-bar">
                                    {skillsSections.skills.map((item, i) => {
                                        return <SkillsItems key={i} item={item} />;
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="skill-section">
                            <div className="skills">
                                <div className="skills-bar">
                                    {skillsSections.secondskills.map((item, i) => {
                                        return <SkillsItems key={i} item={item} />;
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="skills-container">
                <div className="container">
                    <span className="heading">Programming Languages</span>
                    <div className="slider" >
                        <div className="slide-track">
                            {skillsSections.skillsicons.map((item, i) => {
                                return <ImageItems key={i} item={item} />;
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills