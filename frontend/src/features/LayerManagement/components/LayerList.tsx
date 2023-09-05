import React from 'react';

interface Layer {
    id: number;
    name: string;
    // other properties
}

interface LayerListProps {
    layers: Layer[];
}

const LayerList: React.FC<LayerListProps> = ({ layers }) => {
    return (
        <div className="layer-list">
            <h3>Layers</h3>
            <ul>
                {layers.map(layer => (
                    <li key={layer.id}>{layer.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default LayerList;
