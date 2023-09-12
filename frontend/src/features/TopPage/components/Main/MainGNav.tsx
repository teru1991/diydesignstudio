import React from 'react';
// import './path-to-your-css.css';

interface MainGNavProps {
    navItems: { label: string, link: string }[];
}

const MainGNav: React.FC<MainGNavProps> = ({ navItems }) => {
    return (
        <nav className="Main__gNav">
            <ul className="list">
                {navItems.map((item, index) => (
                    <li key={index} className="list__item">
                        <a href={item.link} className="anchor">{item.label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default MainGNav;
