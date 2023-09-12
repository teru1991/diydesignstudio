import React from 'react';
// import './path-to-your-css.css';

const MainScroll: React.FC = () => {
    return (
        <div className="Main__scroll">
            <a className="anchor mo_crop">
                <div className="border"></div>
                <p className="text mo_crop__text f-neue PC" data-text="Scroll for Journey">
                    <span className="mo_crop__text__inner">Scroll for Journey</span>
                </p>
            </a>
        </div>
    );
};

export default MainScroll;
