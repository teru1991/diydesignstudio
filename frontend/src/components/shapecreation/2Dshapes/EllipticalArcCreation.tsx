// EllipticalArcCreation.tsx
import React, { useState } from 'react';

const EllipticalArcCreation = ({ onCreateEllipticalArc }) => {
    const [center, setCenter] = useState('');
    const [majorAxis, setMajorAxis] = useState('');
    const [minorAxis, setMinorAxis] = useState('');
    const [startAngle, setStartAngle] = useState('');
    const [endAngle, setEndAngle] = useState('');

    const handleCreateEllipticalArc = () => {
        // Validation and creation logic here
        // ...

        // Call the onCreateEllipticalArc function with the elliptical arc parameters
        onCreateEllipticalArc({ center, majorAxis, minorAxis, startAngle, endAngle });
    };

    return (
        <div>
            {/* Input form for elliptical arc */}
            <input
                type="text"
                placeholder="Center (x,y)"
                value={center}
                onChange={(e) => setCenter(e.target.value)}
            />
            <input
                type="text"
                placeholder="Major Axis Length"
                value={majorAxis}
                onChange={(e) => setMajorAxis(e.target.value)}
            />
            <input
                type="text"
                placeholder="Minor Axis Length"
                value={minorAxis}
                onChange={(e) => setMinorAxis(e.target.value)}
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
            <button onClick={handleCreateEllipticalArc}>Create Elliptical Arc</button>
        </div>
    );
};

export default EllipticalArcCreation;
