// Toolbar.tsx

import React from 'react';
import './Toolbar.scss';

const Toolbar: React.FC = () => {
    return (
        <div className="toolbar">
            <button className="toolbar-button">選択</button>
            <button className="toolbar-button">線</button>
            <button className="toolbar-button">四角形</button>
            <button className="toolbar-button">円</button>
            <button className="toolbar-button">テキスト</button>
            <button className="toolbar-button">ズーム</button>
            <button className="toolbar-button">移動</button>
            <button className="toolbar-button">回転</button>
            <button className="toolbar-button">削除</button>
            {/* 他のボタンを追加する場合は、ここに追加してください */}
        </div>
    );
};

export default Toolbar;
