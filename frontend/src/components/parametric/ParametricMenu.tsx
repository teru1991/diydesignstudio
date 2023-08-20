// ParametricMenu.tsx
import React from 'react';
import '../../assets/RibbonMenu.scss';

const ParametricMenu = () => {
    return (
        <div className="ribbon-menu">
            <button onClick={() => { /* ToDo: Implement Constraint functionality here */ }}>
                制約
            </button>
            <button onClick={() => { /* ToDo: Implement Action functionality here */ }}>
                アクション
            </button>
            <button onClick={() => { /* ToDo: Implement Parameter functionality here */ }}>
                パラメータ
            </button>
        </div>
    );
};

export default ParametricMenu;
