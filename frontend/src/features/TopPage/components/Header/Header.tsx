import React from 'react';
// import './path-to-your-css.css';
import HeaderSearch from "./HeaderSearch";
import HeaderLogo from "./HeaderLogo";
import HeaderContainer from "./HeaderContainer/HeaderContainer";

// Headerコンポーネント
const Header: React.FC = () => {
    return (
        <header className="Header logo-mag">
            <HeaderContainer />
            <HeaderLogo />
            <HeaderSearch />
            {/* 他のコンポーネントや内容をここに追加 */}
        </header>
    );
};

export default Header;