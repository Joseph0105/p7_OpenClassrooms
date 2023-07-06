import React from 'react';
// Interfaces
import { HostProps } from "../interfaces/Host";
import HostStyle from "./Host.module.css";

export default function Host({ hostName, hostPic, id }: HostProps) {
    return (
        <aside className={HostStyle.hostComp}>
            <div className={HostStyle.hostName}>{hostName}</div>
            <div className={HostStyle.hostPicture}>
                <img src={hostPic} alt={id} />
            </div>
        </aside>
    );
}
