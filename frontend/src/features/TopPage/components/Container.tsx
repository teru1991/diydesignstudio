import React from 'react';
// import './path-to-your-css.css';
import MainContent from "./Main/MainContent";
import Footer from "./Main/Footer";
import House from "./House/House";
import Latest from "./Latest";

// Containerコンポーネント
const Container: React.FC = () => {
    return (
        <div className="Container">
            <MainContent />
            <House/>
            <Footer />
            {/* 他のコンポーネントや内容をここに追加 */}
        </div>
    );
};

export default Container;
