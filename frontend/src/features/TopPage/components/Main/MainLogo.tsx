import React from 'react';
// import './path-to-your-css.css';

interface MainLogoProps {
    logoImageUrl: string;
    altText: string;
}

const MainLogo: React.FC<MainLogoProps> = ({ logoImageUrl, altText }) => {
    return (
        <h1 className="Main__logo">
            <figure className="image">
                <img src={logoImageUrl} alt={altText} />
            </figure>
        </h1>
    );
};

export default MainLogo;
