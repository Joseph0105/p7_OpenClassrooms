import React from "react";
// Interfaces
// Styles
import BannerStyle from "../components/Banner.module.css";


const Banner: React.FC = () => {
    return (
        <div className={BannerStyle.bannerContainer}>
            <div className={BannerStyle.bannerTextContainer}>
                <div className={BannerStyle.bannerText}>Chez vous, partout et ailleurs</div>
            </div>
        </div>
    );
};

export default Banner;
