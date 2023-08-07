import React, { useState } from 'react';

interface ConeCreationProps {
    onCreate: (vertex: number[], radius: number, height: number) => void;
}

const ConeCreation: React.FC<ConeCreationProps> = ({ onCreate }) => {
    const [vertex, setVertex] = useState([0, 0, 0]);
    const [radius, setRadius] = useState(1);
    const [height, setHeight] = useState(1);

    const handleCreate = () => {
        onCreate(vertex, radius, height);
    };

    return (
        <div>
            <h3>円錐</h3>
            <div>
                <label>頂点座標:</label>
                <input type="number" value={vertex[0]} onChange={(e) => setVertex([+e.target.value, vertex[1], vertex[2]])} />
                <input type="number" value={vertex[1]} onChange={(e) => setVertex([vertex[0], +e.target.value, vertex[2]])} />
                <input type="number" value={vertex[2]} onChange={(e) => setVertex([vertex[0], vertex[1], +e.target.value])} />
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

export default ConeCreation;
