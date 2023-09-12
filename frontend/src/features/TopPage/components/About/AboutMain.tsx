import React from 'react';
// import './path-to-your-css.css';

const AboutMain: React.FC = () => {
    return (
        <div className="About__main">
            <figure className="About__main__bg">
                {/* 画像タグの内容をここに追加 */}
            </figure>
            <div className="About__main__contents">
                <h4 className="heading c-heading">
                    <p className="title f-neue">
                        <span className="title__text" data-text="About">About</span>
                    </p>
                </h4>
                <div className="boxes">
                    <div className="boxes__box">
                        {/* 他のテキストや要素の内容 */}
                    </div>
                    <div className="boxes__box">
                        {/* 他のテキストや要素の内容 */}
                        <div className="c-view .c-view--white">
                            <div className="c-view__inner">
                                <a className="anchor mo_crop box" href="#">
                                    <p className="text mo_crop__text f-neue" data-text="View more">
                                        <span className="mo_crop__text__inner">View more</span>
                                    </p>
                                    {/* 他の要素の内容 */}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMain;
