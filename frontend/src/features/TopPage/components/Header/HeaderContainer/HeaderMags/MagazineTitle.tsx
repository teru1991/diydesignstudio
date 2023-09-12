import React from 'react';
// import './path-to-your-css.css';

// MagazineTitleコンポーネント
const MagazineTitle: React.FC = () => {
    return (
        <div className="title">
            <a className="anchor mo_crop" href="https://www.yadohouse.jp/magazine/">
                <p className="text mo_crop__text" data-text="Magazine">
                    <span className="mo_crop__text__inner">Magazine</span>
                </p>
                <span>:</span>
            </a>
        </div>
    );
};

export default MagazineTitle;


