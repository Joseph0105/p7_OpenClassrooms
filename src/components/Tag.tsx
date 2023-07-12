import React from 'react';
// Interfaces 
import { TagProps } from "../interfaces/Tag";
import TagStyle from "./Tag.module.css";



const Tag: React.FC<TagProps> = ({ tag }) => {
    return (
        <div className={TagStyle.tagContainer}>
            <span className={TagStyle.tagButton}>{tag}</span>
        </div>
    );
}

export default Tag;