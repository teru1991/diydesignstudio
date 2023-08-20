// CustomizeMenu.tsx
import React from 'react';
import '../../assets/RibbonMenu.scss';

const CustomizeMenu = () => {
    return (
        <div className="ribbon-menu">
            <button onClick={() => { /* ToDo: Implement UI Settings functionality here */ }}>
                ユーザーインターフェース設定
            </button>
            <button onClick={() => { /* ToDo: Implement Shortcut Key Settings functionality here */ }}>
                ショートカットキー設定
            </button>
            <button onClick={() => { /* ToDo: Implement Toolset Management functionality here */ }}>
                ツールセット管理
            </button>
        </div>
    );
};

export default CustomizeMenu;
