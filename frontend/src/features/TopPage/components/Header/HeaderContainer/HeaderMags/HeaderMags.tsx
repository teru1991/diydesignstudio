import React from 'react';
// import './path-to-your-css.css';
import MagazineTitle from "./MagazineTitle";
import MagazineList from "./MagazineList";

// HeaderMagsコンポーネント
const HeaderMags: React.FC = () => {
    return (
        <div className="Header__mags f-neue">
            <MagazineTitle />
            <MagazineList />
        </div>
    );
};

export default HeaderMags;