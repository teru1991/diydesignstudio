import React, { useState } from 'react';

interface HelixSurfaceCreationProps {
    onCreate: (center: number[], startRadius: number, endRadius: number, height: number, revolutions: number) => void;
}

const HelixSurfaceCreation: React.FC<HelixSurfaceCreationProps> = ({ onCreate }) => {
    const [center, setCenter] = useState<number[]>([0, 0, 0]);
    const [startRadius, setStartRadius] = useState<number>(1);
    const [endRadius, setEndRadius] = useState<number>(0.5);
    const [height, setHeight] = useState<number>(5);
    const [revolutions, setRevolutions] = useState<number>(2);

    const handleCreate = () => {
        onCreate(center, startRadius, endRadius, height, revolutions);
    };

    return (
        <div>
            <h3>螺旋曲面</h3>
            {/* Input fields for center, start radius, end radius, height, and revolutions */}
            <button onClick={handleCreate}>作成</button>
        </div>
    );
};

export default HelixSurfaceCreation;
