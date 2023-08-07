// ArcCreation.tsx
import React, { useState } from 'react';

const ArcCreation = ({ onCreateArc }) => {
    const [center, setCenter] = useState('');
    const [radius, setRadius] = useState('');
    const [startAngle, setStartAngle] = useState('');
    const [endAngle, setEndAngle] = useState('');

    const handleCreateArc = () => {
        // Validation and creation logic here
        // ...

        // Call the onCreateArc function with the arc parameters
        onCreateArc({ center, radius, startAngle, endAngle });
    };

    return (
        <div>
            {/* Input form for arc */}
            <input
                type="text"
                placeholder="Center Point (x,y)"
                value={center}
                onChange={(e) => setCenter(e.target.value)}
            />
            <input
                type="text"
                placeholder="Radius"
                value={radius}
                onChange={(e) => setRadius(e.target.value)}
            />
            <input
                type="text"
                placeholder="Start Angle"
                value={startAngle}
                onChange={(e) => setStartAngle(e.target.value)}
            />
            <input
                type="text"
                placeholder="End Angle"
                value={endAngle}
                onChange={(e) => setEndAngle(e.target.value)}
            />
            <button onClick={handleCreateArc}>Create Arc</button>
        </div>
    );
};

export default ArcCreation;
