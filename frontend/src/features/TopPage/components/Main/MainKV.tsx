import React from 'react';
import SlideItem, { SlideItemProps } from './SlideItem';
// import './path-to-your-css.css';

interface MainKVProps {
    items: SlideItemProps[];
}

const MainKV: React.FC<MainKVProps> = ({ items }) => {
    return (
        <div className="Main__kv">
            <ul className="slide">
                {items.map((item, index) => (
                    <SlideItem key={index} {...item} />
                ))}
            </ul>
        </div>
    );
};

export default MainKV;
