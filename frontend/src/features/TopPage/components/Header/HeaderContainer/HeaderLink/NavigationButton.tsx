import React from 'react';
// import './path-to-your-css.css';

// NavButtonコンポーネント
const NavButton: React.FC = () => {
    return (
        <div className="navButton">
            <a className="anchor">
                <div className="Gnav--open"></div>
                <div className="Gnav--close"></div>
                <ul className="borders">
                    <li className="borders__border"></li>
                    <li className="borders__border"></li>
                </ul>
            </a>
        </div>
    );
};

export default NavButton;