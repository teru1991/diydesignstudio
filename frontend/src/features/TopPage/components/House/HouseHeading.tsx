import React from 'react';
// import './path-to-your-css.css';

const HouseHeading: React.FC = () => {
    return (
        <div className="House__heading">
            <h2 className="heading c-heading">
                <p className="title f-neue">
                    <span className="title__text" data-text="House">House</span>
                </p>
                <p className="subtitle f-neue">subtitle here</p>
            </h2>
            <ul className="list">
                {/* 各住宅レーベルに関するリストアイテムを追加 */}
                <li className="list__item">
                    <a className="anchor mo_crop" href="#">
                        <div className="icon mo_crop__icon">
                            {/* アイコンの画像など */}
                        </div>
                        <p className="text mo_crop__text f-neue">List item text</p>
                    </a>
                </li>
                {/* 他のリストアイテムも同様に追加 */}
            </ul>
        </div>
    );
};

export default HouseHeading;
