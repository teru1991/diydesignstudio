// InsertMenu.tsx
import React from 'react';
import '../../assets/RibbonMenu.scss';

const InsertMenu = () => {
    return (
        <div className="ribbon-menu">
            <button onClick={() => { /* ToDo: Implement Block functionality here */ }}>
                ブロック
            </button>
            <button onClick={() => { /* ToDo: Implement Reference functionality here */ }}>
                参照
            </button>
            <button onClick={() => { /* ToDo: Implement Image functionality here */ }}>
                画像
            </button>
            <button onClick={() => { /* ToDo: Implement Text functionality here */ }}>
                テキスト
            </button>
            <button onClick={() => { /* ToDo: Implement Other Objects functionality here */ }}>
                その他のオブジェクト
            </button>
        </div>
    );
};

export default InsertMenu;

