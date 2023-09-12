import React from 'react';
// import './path-to-your-css.css';
import MainKV from './MainKV';
import MainLogo from './MainLogo';
import MainGNav from './MainGNav';
import MainConcept from './MainConcept';
import MainScroll from './MainScroll';

// MainContentコンポーネント
const MainContent: React.FC = () => {
    return (
        <section className="Main fInview" id="Main">
            <MainKV items={[
                { imageUrl: 'https://www.yadohouse.jp/cms/wp-content/uploads/2022/10/minifi_221005-6_yado5593-1-3840x2562.jpg', imageSet: 'https://www.yadohouse.jp/cms/wp-content/uploads/2022/10/8947c16617b2b122fdbb6d90c94e2247-750x1270.jpg', altText: 'Slide Item' },
                // ... 他のスライドアイテムも同様に追加
            ]} />
            <MainLogo logoImageUrl="https://www.yadohouse.jp/cms/wp-content/themes/yado/assets/images/logo_yado-w.svg" altText="yado" />
            <MainGNav navItems={[
                { label: 'Home', link: '/' },
                { label: 'About', link: '/about' },
                // 他のナビゲーションアイテムを追加
            ]} />
            <MainConcept
                title="泊まるように暮らす"
                subTitle="Living as if you are staying here"
                description="About yado"
                linkUrl="YOUR_LINK_HERE"
            />
            <MainScroll />
        </section>
    );
};



export default MainContent;
