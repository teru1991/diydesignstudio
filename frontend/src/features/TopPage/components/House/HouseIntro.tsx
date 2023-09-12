import React from 'react';
// import './path-to-your-css.css';

const HouseIntro: React.FC = () => {
    return (
        <div className="House__intro">
            <figure className="House__intro__bg">
                {/* 背景画像の内容 */}
            </figure>
            <div className="House__intro__contents">
                <figure className="House__intro__logo">
                    {/* "yado"のロゴ画像など */}
                </figure>
                <p className="text f-neue">January 2023 launched.</p>
                <div className="House__intro__icon">
                    {/* イントロダクションのアイコンやその他の要素 */}
                </div>
            </div>
        </div>
    );
};

export default HouseIntro;
