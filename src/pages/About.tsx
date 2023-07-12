import React from 'react';
// Interfaces
import { AboutProps } from "../interfaces/About";
// Components
import AboutBanner from "../components/AboutBanner";
import Collapse from "../components/Collapse";
import aboutInfo from "../data/aboutInfo.json";
// Styles
import AboutStyle from './About.module.css';



const About: React.FC = () => {
    return (
        <>
            <div className={AboutStyle.aboutContainer}>
                <AboutBanner />
                <div className={AboutStyle.collapseContainer}>
                    {(aboutInfo as AboutProps[]).map((rule, id) => (
                        <Collapse
                            key={id}
                            aboutTitle={rule.aboutTitle}
                            aboutText={rule.aboutText}
                            aboutStyle="about-style"
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default About;
