import React from 'react';

const LayerState = () => {
    const handleSave = () => {
        // 保存ロジック
    };

    const handleLoad = () => {
        // 読み込みロジック
    };

    return (
        <div className="layer-state">
            <h4>Layer State</h4>
            <button onClick={handleSave}>Save State</button>
            <button onClick={handleLoad}>Load State</button>
        </div>
    );
}

export default LayerState;
