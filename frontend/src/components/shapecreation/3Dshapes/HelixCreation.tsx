import React, { useState } from 'react';

interface HelixCreationProps {
    onCreate: (center: number[], startRadius: number, endRadius: number, height: number, revolutions: number) => void;
}

const HelixCreation: React.FC<HelixCreationProps> = ({ onCreate }) => {
    const [center, setCenter] = useState<number[]>([0, 0, 0]);
    const [startRadius, setStartRadius] = useState<number>(1);
    const [endRadius, setEndRadius] = useState<number>(2);
    const [height, setHeight] = useState<number>(5);
    const [revolutions, setRevolutions] = useState<number>(3);

    const handleCreate = () => {
        onCreate(center, startRadius, endRadius, height, revolutions);
    };

    return (
        <div>
            <h3>螺旋</h3>
            <div>
                <label>中心点座標:</label>
                <input type="number" value={center[0]} onChange={(e) => setCenter([+e.target.value, center[1], center[2]])} />
                <input type="number" value={center[1]} onChange={(e) => setCenter([center[0], +e.target.value, center[2]])} />
                <input type="number" value={center[2]} onChange={(e) => setCenter([center[0], center[1], +e.target.value])} />
            </div>
            <div>
                <label>始点半径:</label>
                <input type="number" value={startRadius} onChange={(e) => setStartRadius(+e.target.value)} />
            </div>
            <div>
                <label>終点半径:</label>
                <input type="number" value={endRadius} onChange={(e) => setEndRadius(+e.target.value)} />
            </div>
            <div>
                <label>高さ:</label>
                <input type="number" value={height} onChange={(e) => setHeight(+e.target.value)} />
            </div>
            <div>
                <label>回転数:</label>
                <input type="number" value={revolutions} onChange={(e) => setRevolutions(+e.target.value)} />
            </div>
            <button onClick={handleCreate}>作成</button>
        </div>
    );
};

export default HelixCreation;
