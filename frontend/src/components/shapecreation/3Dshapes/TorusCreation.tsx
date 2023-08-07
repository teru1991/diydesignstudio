import React, { useState } from 'react';

interface TorusCreationProps {
    onCreate: (center: number[], majorRadius: number, minorRadius: number) => void;
}

const TorusCreation: React.FC<TorusCreationProps> = ({ onCreate }) => {
    const [center, setCenter] = useState([0, 0, 0]);
    const [majorRadius, setMajorRadius] = useState(1);
    const [minorRadius, setMinorRadius] = useState(0.5);

    const handleCreate = () => {
        onCreate(center, majorRadius, minorRadius);
    };

    return (
        <div>
            <h3>トーラス</h3>
            <div>
                <label>中心点座標:</label>
                <input type="number" value={center[0]} onChange={(e) => setCenter([+e.target.value, center[1], center[2]])} />
                <input type="number" value={center[1]} onChange={(e) => setCenter([center[0], +e.target.value, center[2]])} />
                <input type="number" value={center[2]} onChange={(e) => setCenter([center[0], center[1], +e.target.value])} />
            </div>
            <div>
                <label>メジャー半径:</label>
                <input type="number" value={majorRadius} onChange={(e) => setMajorRadius(+e.target.value)} />
            </div>
            <div>
                <label>マイナー半径:</label>
                <input type="number" value={minorRadius} onChange={(e) => setMinorRadius(+e.target.value)} />
            </div>
            <button onClick={handleCreate}>作成</button>
        </div>
    );
};

export default TorusCreation;
