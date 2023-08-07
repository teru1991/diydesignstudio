import React, { useState } from 'react';

interface SurfaceCreationProps {
    onCreate: (controlPoints: number[][][]) => void;
}

const SurfaceCreation: React.FC<SurfaceCreationProps> = ({ onCreate }) => {
    const [controlPoints, setControlPoints] = useState<number[][][]>([]);

    const handleCreate = () => {
        onCreate(controlPoints);
    };

    return (
        <div>
            <h3>曲面</h3>
            {/* Input fields to add control points */}
            <button onClick={() => setControlPoints([...controlPoints, [x, y, z]])}>Add Control Point</button>
            {/* Add more options as needed */}
            <button onClick={handleCreate}>作成</button>
        </div>
    );
};

export default SurfaceCreation;
