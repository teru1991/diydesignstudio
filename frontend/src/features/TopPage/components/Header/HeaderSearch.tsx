import React from 'react';
// import './path-to-your-css.css';

// HeaderSearchコンポーネント
const HeaderSearch: React.FC = () => {
    return (
        <div className="Header__search">
            <form action="https://www.yadohouse.jp/" className="form" method="get">
                <input
                    autoComplete={"off"}
                    className="input f-neue"
                    id="search"
                    name="s"
                    placeholder="Search for Journey"
                    required
                    type="text"
                />
                <button className="button" type="submit">
                    <figure className="ico">
                        <img alt="Search" src="https://www.yadohouse.jp/cms/wp-content/themes/yado/assets/images/ico_search.svg" />
                    </figure>
                </button>
            </form>
        </div>
    );
};

export default HeaderSearch;
