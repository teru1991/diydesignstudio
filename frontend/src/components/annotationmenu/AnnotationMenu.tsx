// AnnotationMenu.tsx
import React from 'react';
import '../../assets/RibbonMenu.scss';

const AnnotationMenu = () => {
    return (
        <div className="ribbon-menu">
            <button onClick={() => { /* ToDo: Implement Text functionality here */ }}>
                テキスト
            </button>
            <button onClick={() => { /* ToDo: Implement Dimension functionality here */ }}>
                寸法
            </button>
            <button onClick={() => { /* ToDo: Implement Hatch functionality here */ }}>
                ハッチ
            </button>
            <button onClick={() => { /* ToDo: Implement Table functionality here */ }}>
                テーブル
            </button>
            <button onClick={() => { /* ToDo: Implement Leader functionality here */ }}>
                リーダー
            </button>
            <button onClick={() => { /* ToDo: Implement Other Annotation Tools functionality here */ }}>
                その他の注釈ツール
            </button>
        </div>
    );
};

export default AnnotationMenu;

