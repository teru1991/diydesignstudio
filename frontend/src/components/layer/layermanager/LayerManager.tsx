import React, { useState } from 'react';
import LayerProperties from "../layerproperties/LayerProperties";
import LayerState from "../layerstate/LayerState";
import LayerFilter from "../layerfilter/LayerFilter";
import LayerList from "../layerlist/LayerList";

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
