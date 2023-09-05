import React, { useState } from 'react';
import LayerProperties from "./LayerProperties";
import LayerState from "./LayerState";
import LayerFilter from "./LayerFilter";
import LayerList from "./LayerList";

const LayerManager = () => {
    const [layers, setLayers] = useState([
        // デモ用のデータ
        { id: 1, name: "Layer1" },
        { id: 2, name: "Layer2" },
        // ... その他のレイヤー
    ]);

    return (
        <div className="layer-manager">
            <LayerList layers={layers} />
            <LayerProperties />
            <LayerState />
            <LayerFilter />
        </div>
    );
}

export default LayerManager;
