// RenderingMenu.tsx
import React from 'react';
import '../../assets/RibbonMenu.scss';

const RenderingMenu = () => {
    return (
        <div className="ribbon-menu">
            <button onClick={() => { /* ToDo: Implement Material Settings functionality here */ }}>
                マテリアル設定
            </button>
            <button onClick={() => { /* ToDo: Implement Lighting functionality here */ }}>
                ライティング
            </button>
            <button onClick={() => { /* ToDo: Implement Rendering Settings functionality here */ }}>
                レンダリング設定
            </button>
            <button onClick={() => { /* ToDo: Implement Start Rendering functionality here */ }}>
                レンダリング開始
            </button>
        </div>
    );
};

export default RenderingMenu;
