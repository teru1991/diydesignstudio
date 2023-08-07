import React, { useState } from 'react';

interface CylinderCreationProps {
    onCreate: (center: number[], radius: number, height: number) => void;
}

const CylinderCreation: React.FC<CylinderCreationProps> = ({ onCreate }) => {
    const [center, setCenter] = useState([0, 0, 0]);
    const [radius, setRadius] = useState(1);
    const [height, setHeight] = useState(1);

    const handleCreate = () => {
        onCreate(center, radius, height);
    };

    return (
        <div>
            <h3>円柱</h3>
            <div>
                <label>中心点座標:</label>
                <input type="number" value={center[0]} onChange={(e) => setCenter([+e.target.value, center[1], center[2]])} />
                <input type="number" value={center[1]} onChange={(e) => setCenter([center[0], +e.target.value, center[2]])} />
                <input type="number" value={center[2]} onChange={(e) => setCenter([center[0], center[1], +e.target.value])} />
            </div>
            <div>
                <label>半径:</label>
                <input type="number" value={radius} onChange={(e) => setRadius(+e.target.value)} />
            </div>
            <div>
                <label>高さ:</label>
                <input type="number" value={height} onChange={(e) => setHeight(+e.target.value)} />
            </div>
            <button onClick={handleCreate}>作成</button>
        </div>
    );
};

export default CylinderCreation;
