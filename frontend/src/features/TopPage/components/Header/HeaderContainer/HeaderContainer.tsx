import React from 'react';
// import './path-to-your-css.css';
import HeaderMags from "./HeaderMags/HeaderMags";
import HeaderLinks from "./HeaderLink/HeaderLinks";

// HeaderContainerコンポーネント
const HeaderContainer: React.FC = () => {
    return (
        <div className="Header__container">
            <HeaderMags />
            <HeaderLinks />
            {/* この中のコンテンツを埋める */}
        </div>
    );
};

export default HeaderContainer;