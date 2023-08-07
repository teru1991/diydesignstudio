import React, { useState } from 'react';

interface CubeCreationProps {
    onCreate: (center: number[], width: number, height: number, depth: number) => void;
}

const CubeCreation: React.FC<CubeCreationProps> = ({ onCreate }) => {
    const [center, setCenter] = useState([0, 0, 0]);
    const [width, setWidth] = useState(1);
    const [height, setHeight] = useState(1);
    const [depth, setDepth] = useState(1);

    const handleCreate = () => {
        onCreate(center, width, height, depth);
    };

    return (
        <div>
            <h3>立方体</h3>
            <div>
                <label>中心点座標:</label>
                <input type="number" value={center[0]} onChange={(e) => setCenter([+e.target.value, center[1], center[2]])} />
                <input type="number" value={center[1]} onChange={(e) => setCenter([center[0], +e.target.value, center[2]])} />
                <input type="number" value={center[2]} onChange={(e) => setCenter([center[0], center[1], +e.target.value])} />
            </div>
            <div>
                <label>幅:</label>
                <input type="number" value={width} onChange={(e) => setWidth(+e.target.value)} />
            </div>
            <div>
                <label>高さ:</label>
                <input type="number" value={height} onChange={(e) => setHeight(+e.target.value)} />
            </div>
            <div>
                <label>奥行き:</label>
                <input type="number" value={depth} onChange={(e) => setDepth(+e.target.value)} />
            </div>
            <button onClick={handleCreate}>作成</button>
        </div>
    );
};

export default CubeCreation;
