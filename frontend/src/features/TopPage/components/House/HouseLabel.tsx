import React from 'react';
// import './path-to-your-css.css';

const HouseLabel: React.FC<{ labelNumber: number, title: string, description: string, viewMoreLink: string }> = ({ labelNumber, title, description, viewMoreLink }) => {
    return (
        <li className="labelList__item fInview">
            <p className="heading f-neue">Label {labelNumber}</p>
            <a className="anchor mo_crop" href={viewMoreLink}>
                {/* スライドや画像の部分のコードをここに追加 */}
                <h3 className="title f-min">{title}</h3>
                <p className="lead">{description}</p>
                <div className="c-view">
                    <div className="c-view__inner">
                        <div className="box">
                            <p className="text mo_crop__text f-neue" data-text="View more"><span className="mo_crop__text__inner">View more</span></p>
                            {/* 他の要素の内容 */}
                        </div>
                    </div>
                </div>
            </a>
        </li>
    );
};

export default HouseLabel;
