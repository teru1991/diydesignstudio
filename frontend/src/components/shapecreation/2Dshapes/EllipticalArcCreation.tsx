import React, { useState } from 'react';

interface EllipticalArcCreationProps {
    onCreateEllipticalArc: (center: string, majorAxis: string, minorAxis: string, startAngle: string, endAngle: string) => void;
}

const EllipticalArcCreation: React.FC<EllipticalArcCreationProps> = ({ onCreateEllipticalArc }) => {
    const [center, setCenter] = useState('');
    const [majorAxis, setMajorAxis] = useState('');
    const [minorAxis, setMinorAxis] = useState('');
    const [startAngle, setStartAngle] = useState('');
    const [endAngle, setEndAngle] = useState('');

    const handleCreateEllipticalArc = () => {
        // Validation and creation logic here
        // ...

        // Call the onCreateEllipticalArc function with the elliptical arc parameters
        onCreateEllipticalArc(center, majorAxis, minorAxis, startAngle, endAngle);
    };

    return (
        <div>
            {/* Input form for elliptical arc */}
            <input
                type="text"
                placeholder="Center Point (x1,y1)"
                value={center}
                onChange={(e) => setCenter(e.target.value)}
            />
            <input
                type="text"
                placeholder="Major Axis"
                value={majorAxis}
                onChange={(e) => setMajorAxis(e.target.value)}
            />
            <input
                type="text"
                placeholder="Minor Axis"
                value={minorAxis}
                onChange={(e) => setMinorAxis(e.target.value)}
            />
            <input
                type="text"
                placeholder="Start Angle (in degrees)"
                value={startAngle}
                onChange={(e) => setStartAngle(e.target.value)}
            />
            <input
                type="text"
                placeholder="End Angle (in degrees)"
                value={endAngle}
                onChange={(e) => setEndAngle(e.target.value)}
            />
            <button onClick={handleCreateEllipticalArc}>Create Elliptical Arc</button>
        </div>
    );
};

export default EllipticalArcCreation;
