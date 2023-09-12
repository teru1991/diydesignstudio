import React from 'react';
// import './path-to-your-css.css';

interface LatestListItemProps {
    imageUrl: string;
    title: string;
    description: string;
    link: string;
    date: string;
}

interface LatestProps {
    heading: string;
    listItems: LatestListItemProps[];
}

const Latest: React.FC<LatestProps> = ({ heading, listItems }) => {
    return (
        <section id="Latest">
            <h2 className="heading">{heading}</h2>
            <ul className="c-magList c-magList--changeView">
                {listItems.map((item, index) => (
                    <li key={index} className="c-magList__item">
                        <figure className="c-magList__item__visual">
                            <img src={item.imageUrl} alt={item.title} />
                        </figure>
                        <div className="c-magList__item__info">
                            <h3 className="c-magList__item__info__heading">{item.title}</h3>
                            <p className="c-magList__item__info__lead">{item.description}</p>
                            <div className="c-magList__item__info__data">
                                <time className="c-magList__item__info__data__time">{item.date}</time>
                                <a href={item.link} className="c-magList__item__info__data__link">Read More</a>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Latest;
