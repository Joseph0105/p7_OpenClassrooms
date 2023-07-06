import React from 'react';
// Interfaces 
import { TagProps } from "../interfaces/Tag";


const Tag: React.FC<TagProps> = ({ tag }) => {
    return (
        <div className="tagContainer">
            <span className="tagButton">{tag}</span>
        </div>
    );
}

export default Tag;