import React from 'react';
// import './path-to-your-css.css';



// MagazineListコンポーネント
const MagazineList: React.FC = () => {
    const listItems = [
        { text: "All", link: "https://www.yadohouse.jp/magazine/" },
        { text: "Interview", link: "https://www.yadohouse.jp/magazine/category/interview/" },
        // ... 他のリンクも同様に追加
    ];
    return (
        <ul className="list">
            {listItems.map(item => (
                <li className="list__item" key={item.text}>
                    <a className="anchor mo_crop" href={item.link}>
                        <p className="text mo_crop__text" data-text={item.text}>
                            <span className="mo_crop__text__inner">{item.text}</span>
                        </p>
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default MagazineList;
