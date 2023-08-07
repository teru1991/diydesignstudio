import React, { useState } from 'react';

interface CircleCreationProps {
    onCreateCircle: (center: string, radius: string) => void;
}

const CircleCreation: React.FC<CircleCreationProps> = ({ onCreateCircle }) => {
    const [center, setCenter] = useState<string>('');
    const [radius, setRadius] = useState<string>('');

    const handleCreate = () => {
        onCreateCircle(center, radius);
    };

    return (
        <div>
            <h3>円</h3>
            {/* Input fields for circle properties */}
            <input type="text" value={center} onChange={(e) => setCenter(e.target.value)} />
            <input type="text" value={radius} onChange={(e) => setRadius(e.target.value)} />
            {/* Add more options as needed */}
            <button onClick={handleCreate}>作成</button>
        </div>
    );
};

export default CircleCreation;
