import React from 'react';
// import './path-to-your-css.css';

// HeaderLogoコンポーネント
const HeaderLogo: React.FC = () => {
    return (
        <div className="Header__logo">
            <a className="anchor" href="https://www.yadohouse.jp/">
                <figure className="logo logo--mag">
                    <img alt="yado magazine" src="https://www.yadohouse.jp/cms/wp-content/themes/yado/assets/images/logo_yadomag.svg" />
                </figure>
                <figure className="logo logo--yado">
                    <img alt="yado" src="https://www.yadohouse.jp/cms/wp-content/themes/yado/assets/images/logo_yado.svg" />
                </figure>
            </a>
        </div>
    );
};

export default HeaderLogo;
