import React, { useState } from 'react';

interface ArcCreationProps {
    onCreateArc: (center: string, radius: string, startAngle: string, endAngle: string) => void;
}

const ArcCreation: React.FC<ArcCreationProps> = ({ onCreateArc }) => {
    const [center, setCenter] = useState<string>('');
    const [radius, setRadius] = useState<string>('');
    const [startAngle, setStartAngle] = useState<string>('');
    const [endAngle, setEndAngle] = useState<string>('');

    const handleCreate = () => {
        onCreateArc(center, radius, startAngle, endAngle);
    };

    return (
        <div>
            <h3>円弧</h3>
            {/* Input fields for arc properties */}
            <input type="text" value={center} onChange={(e) => setCenter(e.target.value)} />
            <input type="text" value={radius} onChange={(e) => setRadius(e.target.value)} />
            <input type="text" value={startAngle} onChange={(e) => setStartAngle(e.target.value)} />
            <input type="text" value={endAngle} onChange={(e) => setEndAngle(e.target.value)} />
            {/* Add more options as needed */}
            <button onClick={handleCreate}>作成</button>
        </div>
    );
};

export default ArcCreation;
