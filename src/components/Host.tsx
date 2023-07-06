import React from 'react';
// Interfaces
import { HostProps } from "../interfaces/Host";

export default function Host({ hostName, hostPic, id }: HostProps) {
    return (
        <aside className="host-comp">
            <div className="host-name">{hostName}</div>
            <div className="hostPicture">
                <img src={hostPic} alt={id} />
            </div>
        </aside>
    );
}
