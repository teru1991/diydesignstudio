import React from 'react';
// import './path-to-your-css.css';
import NavigationList from "./NavigationList";
import SearchIcon from "./SearchIcon";
import NavButton from "./NavigationButton";

// HeaderLinksコンポーネント
const HeaderLinks: React.FC = () => {
    return (
        <div className="Header__links f-neue">
            <NavigationList />
            <SearchIcon />
            <NavButton />
        </div>
    );
};

export default HeaderLinks;