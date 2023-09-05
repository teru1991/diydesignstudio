// OutputMenu.tsx
import React from 'react';
import '../../../assets/RibbonMenu.scss';

const OutputMenu = () => {
    return (
        <div className="ribbon-menu">
            <button onClick={() => { /* ToDo: Implement Plot functionality here */ }}>
                プロット
            </button>
            <button onClick={() => { /* ToDo: Implement Export functionality here */ }}>
                エクスポート
            </button>
            <button onClick={() => { /* ToDo: Implement Publish functionality here */ }}>
                出版
            </button>
            <button onClick={() => { /* ToDo: Implement Print functionality here */ }}>
                プリント
            </button>
        </div>
    );
};

export default OutputMenu;

