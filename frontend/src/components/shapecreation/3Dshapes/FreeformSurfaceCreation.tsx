import React, { useState } from 'react';

interface FreeformSurfaceCreationProps {
    onCreate: (controlPoints: number[][]) => void;
}

const FreeformSurfaceCreation: React.FC<FreeformSurfaceCreationProps> = ({ onCreate }) => {
    const [controlPoints, setControlPoints] = useState<number[][]>([]);
    const [x, setX] = useState<number>(0);
    const [y, setY] = useState<number>(0);
    const [z, setZ] = useState<number>(0);

    const handleCreate = () => {
        onCreate(controlPoints);
    };

    return (
        <div>
            <h3>フリーフォーム曲面</h3>
            {/* Input fields to add control points */}
            <button onClick={() => setControlPoints([...controlPoints, [x, y, z]])}>Add Control Point</button>
            {/* Add more options as needed */}
            <button onClick={handleCreate}>作成</button>
        </div>
    );
};

export default FreeformSurfaceCreation;
