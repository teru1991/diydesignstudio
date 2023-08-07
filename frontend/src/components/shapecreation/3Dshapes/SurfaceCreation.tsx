import React, { useState } from 'react';

interface SurfaceCreationProps {
    onCreate: (controlPoints: [number, number, number][]) => void;
}

const SurfaceCreation: React.FC<SurfaceCreationProps> = ({ onCreate }) => {
    const [controlPoints, setControlPoints] = useState<[number, number, number][]>([]);
    const [x, setX] = useState<number>(0);
    const [y, setY] = useState<number>(0);
    const [z, setZ] = useState<number>(0);

    const handleCreate = () => {
        onCreate(controlPoints);
    };

    return (
        <div>
            <h3>曲面</h3>
            {/* Input fields to add control points */}
            <input type="number" value={x} onChange={(e) => setX(Number(e.target.value))} />
            <input type="number" value={y} onChange={(e) => setY(Number(e.target.value))} />
            <input type="number" value={z} onChange={(e) => setZ(Number(e.target.value))} />
            <button onClick={() => setControlPoints([...controlPoints, [x, y, z]])}>Add Control Point</button>
            {/* Add more options as needed */}
            <button onClick={handleCreate}>作成</button>
        </div>
    );
};

export default SurfaceCreation;
