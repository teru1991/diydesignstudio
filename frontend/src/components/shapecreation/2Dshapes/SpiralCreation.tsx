// SpiralCreation.tsx
import React, { useState } from 'react';

const SpiralCreation = ({ onCreateSpiral }) => {
    const [center, setCenter] = useState('');
    const [startRadius, setStartRadius] = useState('');
    const [endRadius, setEndRadius] = useState('');
    const [numTurns, setNumTurns] = useState('');
    const [startAngle, setStartAngle] = useState('');
    const [endAngle, setEndAngle] = useState('');

    const handleCreateSpiral = () => {
        // Validation and creation logic here
        // ...

        // Call the onCreateSpiral function with the spiral parameters
        onCreateSpiral({ center, startRadius, endRadius, numTurns, startAngle, endAngle });
    };

    return (
        <div>
            {/* Input form for spiral */}
            <input
                type="text"
                placeholder="Center (x,y)"
                value={center}
                onChange={(e) => setCenter(e.target.value)}
            />
            <input
                type="text"
                placeholder="Start Radius"
                value={startRadius}
                onChange={(e) => setStartRadius(e.target.value)}
            />
            <input
                type="text"
                placeholder="End Radius"
                value={endRadius}
                onChange={(e) => setEndRadius(e.target.value)}
            />
            <input
                type="text"
                placeholder="Number of Turns"
                value={numTurns}
                onChange={(e) => setNumTurns(e.target.value)}
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
            <button onClick={handleCreateSpiral}>Create Spiral</button>
        </div>
    );
};

export default SpiralCreation;
