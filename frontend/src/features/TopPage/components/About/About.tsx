import React from 'react';
// import './path-to-your-css.css';
import AboutMain from "./AboutMain";
import Supporters from "./Supporters";

// Aboutコンポーネント
const About: React.FC = () => {
    return (
        <section className="About">
            <AboutMain />
            <Supporters />
        </section>
    );
};

export default About;
