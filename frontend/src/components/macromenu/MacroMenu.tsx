// MacroMenu.tsx
import React from 'react';
import '../../assets/RibbonMenu.scss';

const MacroMenu = () => {
    return (
        <div className="ribbon-menu">
            <button onClick={() => { /* ToDo: Implement Create Macro functionality here */ }}>
                マクロの作成
            </button>
            <button onClick={() => { /* ToDo: Implement Execute Macro functionality here */ }}>
                マクロの実行
            </button>
            <button onClick={() => { /* ToDo: Implement Macro Editor functionality here */ }}>
                マクロエディタ
            </button>
        </div>
    );
};

export default MacroMenu;
