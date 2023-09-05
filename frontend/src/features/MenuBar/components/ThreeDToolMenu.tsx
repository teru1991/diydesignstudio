// 3DToolsMenu.tsx
import React from 'react';
import '../../../assets/RibbonMenu.scss';

const ThreeDToolsMenu = () => {
    return (
        <div className="ribbon-menu">
            <button onClick={() => { /* ToDo: Implement Mesh Modeling functionality here */ }}>
                メッシュモデリング
            </button>
            <button onClick={() => { /* ToDo: Implement Solid Modeling functionality here */ }}>
                ソリッドモデリング
            </button>
            <button onClick={() => { /* ToDo: Implement Surface Modeling functionality here */ }}>
                サーフェスモデリング
            </button>
        </div>
    );
};

export default ThreeDToolsMenu;
