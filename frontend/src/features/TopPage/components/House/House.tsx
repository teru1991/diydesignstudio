import React from 'react';
// import './path-to-your-css.css';
import HouseDescription from "./HouseDescription";
import HouseIntro from "./HouseIntro";
import HouseHeading from "./HouseHeading";
import HouseLabel from "./HouseLabel";


// Houseコンポーネント
const House: React.FC = () => {
    return (
        <section className="House">
            <HouseHeading />
            <HouseDescription />
            <HouseIntro />
            </section>
    );
};

export default House;
