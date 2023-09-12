import React from 'react';
// import './path-to-your-css.css';

interface MainConceptProps {
    title: string;
    subTitle: string;
    description: string;
    linkUrl: string;
}

const MainConcept: React.FC<MainConceptProps> = ({ title, subTitle, description, linkUrl }) => {
    return (
        <div className="Main__concept">
            <h2 className="catch">
                <p className="catch__ja f-min">
                    {title.split('').map((char, index) => <span key={index} className="char">{char}</span>)}
                </p>
                <p className="catch__en f-neue">
                    <span className="catch__en__inner">{subTitle}</span>
                </p>
            </h2>
            <div className="link">
                <a className="anchor mo_crop" href={linkUrl}>
                    <p className="text mo_crop__text f-neue" data-text={description}>
                        <span className="mo_crop__text__inner">{description}</span>
                    </p>
                    <figure className="arrow">
                        <img alt="&gt;" src="https://www.yadohouse.jp/cms/wp-content/themes/yado/assets/images/arrow-w.svg"/>
                    </figure>
                </a>
            </div>
        </div>
    );
};

export default MainConcept;
