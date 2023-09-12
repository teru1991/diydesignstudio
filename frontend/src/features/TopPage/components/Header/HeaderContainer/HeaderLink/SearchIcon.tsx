import React from 'react';
// import './path-to-your-css.css';

// SearchIconコンポーネント
const SearchIcon: React.FC = () => {
    return (
        <div className="search">
            <a className="anchor mo_crop">
                <figure className="ico">
                    <img alt="Search" src="https://www.yadohouse.jp/cms/wp-content/themes/yado/assets/images/ico_search.svg" />
                </figure>
                <p className="text mo_crop__text" data-text="Search">
                    <span className="mo_crop__text__inner">Search</span>
                </p>
            </a>
        </div>
    );
};

export default SearchIcon;