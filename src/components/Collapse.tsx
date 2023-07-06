import React, { useState, useRef, useEffect } from 'react';
import { CollapseProps } from '../interfaces/Collapse';
import Chevron from "../assets/vectorBas.svg";

const Collapse: React.FC<CollapseProps> = ({ aboutStyle, aboutTitle, aboutText }) => {
    const [toggle, setToggle] = useState(false);
    const [heightEl, setHeightEl] = useState("0px");
    const refHeight = useRef<HTMLDivElement>(null);

    const toggleState = () => {
        setToggle(!toggle);
    };

    useEffect(() => {
        if (refHeight.current) {
            setHeightEl(`${refHeight.current.scrollHeight}px`);
        }
    }, []);

    return (
        <div className={`collapse ${aboutStyle}`}>
            <div onClick={toggleState} className="collapse__visible">
                <h2>{aboutTitle}</h2>
                <img
                    className={toggle ? "chevron rotated" : "chevron"}
                    src={Chevron}
                    alt="chevron"
                />
            </div>
            <div
                ref={refHeight}
                className={toggle ? "collapse__toggle animated" : "collapse__toggle"}
                style={{ height: toggle ? `${heightEl}` : "0px" }}
            >
                <p aria-hidden={toggle ? "true" : "false"}>{aboutText}</p>
            </div>
        </div>
    );
};

export default Collapse;
