
import React from 'react';

const FooterComponent: React.FC = () => {
    return (
        <footer>
            <footer className="Footer" id="Footer">
            <ul className="Footer__top">
            <li className="Footer__top__box">
            <h5 className="heading">
            <p className="title f-neue">Our Instagram</p>
            <p className="lead">公式Instagramはこちら</p>
            </h5>
            <div className="c-view">
            <div className="c-view__inner"><a className="anchor mo_crop box" href="https://www.instagram.com/yado_house/" target="_blank">
            <p className="text mo_crop__text f-neue" data-text="Official Instagram"><span className="mo_crop__text__inner">Official Instagram</span></p>
            <figure className="arrow"><img alt="&gt;" src="https://www.yadohouse.jp/cms/wp-content/themes/yado/assets/images/arrow.svg"/></figure></a>
            </div>
            </div>
            </li>
            <li className="Footer__top__box">
            <h5 className="heading">
            <p className="title f-neue">Contact Us</p>
            <p className="lead">各種お問い合わせはこちら</p>
            </h5>
            <div className="c-view">
            <div className="c-view__inner"><a className="anchor mo_crop box" href="https://www.yadohouse.jp/contact/">
            <p className="text mo_crop__text f-neue" data-text="Contact Form"><span className="mo_crop__text__inner">Contact Form</span></p>
            <figure className="arrow"><img alt="&gt;" src="https://www.yadohouse.jp/cms/wp-content/themes/yado/assets/images/arrow.svg"/></figure></a>
            </div>
            </div>
            </li>
            </ul>
            <div className="Footer__bottom">
            <ul className="Footer__bottom__links">
            <li className="item"><a className="anchor mo_crop" href="https://www.yadohouse.jp/company/">
            <p className="text mo_crop__text f-neue" data-text="Company"><span className="mo_crop__text__inner">Company</span></p></a></li>
            <li className="item"><a className="anchor mo_crop" href="https://www.yadohouse.jp/privacy/">
            <p className="text mo_crop__text f-neue" data-text="Privacy Policy"><span className="mo_crop__text__inner">Privacy Policy</span></p></a></li>
            <li className="item"><a className="anchor mo_crop" href="https://www.yadohouse.jp/partner/" target="_blank">
            <p className="text mo_crop__text" data-text="企業の方へ"><span className="mo_crop__text__inner">企業の方へ</span></p></a></li>
            </ul>
            <ul className="Footer__bottom__sns">
            <li className="item"><a className="anchor mo_crop" href="https://www.instagram.com/yado_house/" target="_blank">
            <figure className="ico"><img alt="Instagram" className="lazy fLazy--loaded" data-original="https://www.yadohouse.jp/cms/wp-content/themes/yado/assets/images/ico_insta.svg" src="https://www.yadohouse.jp/cms/wp-content/themes/yado/assets/images/ico_insta.svg"/></figure>
            <p className="text mo_crop__text f-neue" data-text="Instagram"><span className="mo_crop__text__inner">Instagram</span></p></a></li>
            <li className="item">
            <p className="text text--copy f-neue">© yado inc.</p>
            </li>
            </ul>
            </div>
            </footer>
        </footer>
    );
}

export default FooterComponent;
