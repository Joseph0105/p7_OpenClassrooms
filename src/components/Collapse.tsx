import React, { useState, useRef, useEffect } from 'react';
// Interfaces
import { CollapseProps } from '../interfaces/Collapse';
// Styles
import Chevron from "../assets/vectorBas.svg";
import CollapseStyle from "./Collapse.module.css";

const Collapse: React.FC<CollapseProps> = ({ aboutStyle, aboutTitle, aboutText }) => {
    const [toggle, setToggle] = useState(false);
    // const [heightEl, setHeightEl] = useState("0px");
    // const refHeight = useRef<HTMLDivElement>(null);

    const toggleState = () => {
        setToggle(prev => !prev)
        // Pour pouvoir le faire 2 fois
    };

    // useEffect(() => {
    //     if (refHeight.current) {
    //         setHeightEl(`${refHeight.current.scrollHeight}px`);
    //     }
    // }, []);

    return (
        <div className={`collapse ${aboutStyle}`}>
            <div onClick={toggleState} className={CollapseStyle.collapseVisible}>
                <h2>{aboutTitle}</h2>
                <img
                    className={toggle ? CollapseStyle.chevron : CollapseStyle.rotated}
                    src={Chevron}
                    alt="chevron"
                />
            </div>
            {toggle && <div
                // ref={refHeight}
                className={`${toggle ? CollapseStyle.collapseToggle : ''} ${CollapseStyle.animated}`}
            // style={{ height: toggle ? `${heightEl}` : "0px" }}
            >
                <p>{aboutText}</p>
            </div>
            }
        </div>
    );
};

export default Collapse;
