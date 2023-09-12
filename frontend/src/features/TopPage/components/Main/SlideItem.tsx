import React from 'react';
// import './path-to-your-css.css';

export interface SlideItemProps {
    imageUrl?: string;
    imageSet?: string;
    videoUrl?: string;
    videoMobileUrl?: string;
    altText: string;
}

const SlideItem: React.FC<SlideItemProps> = ({ imageUrl, imageSet, videoUrl, videoMobileUrl, altText }) => {
    if (imageUrl) {
        return (
            <li className="slide__item is-init">
                <figure className="image">
                    <picture>
                        {imageSet && <source media="(max-width:980px)" srcSet={imageSet} />}
                        <img src={imageUrl} alt={altText} />
                    </picture>
                </figure>
            </li>
        );
    } else if (videoUrl) {
        return (
            <li className="slide__item">
                <figure className="image">
                    <video data-sp={videoMobileUrl} data-src={videoUrl} loop muted playsInline></video>
                </figure>
            </li>
        );
    }
    return null;
};

export default SlideItem;
