// EllipseCreation.tsx
import React, { useState } from 'react';

const EllipseCreation = ({ onCreateEllipse }) => {
    const [center, setCenter] = useState('');
    const [majorAxis, setMajorAxis] = useState('');
    const [minorAxis, setMinorAxis] = useState('');

    const handleCreateEllipse = () => {
        // Validation and creation logic here
        // ...

        // Call the onCreateEllipse function with the ellipse parameters
        onCreateEllipse({ center, majorAxis, minorAxis });
    };

    return (
        <div>
            {/* Input form for ellipse */}
            <input
                type="text"
                placeholder="Center Point (x,y)"
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
            <button onClick={handleCreateEllipse}>Create Ellipse</button>
        </div>
    );
};

export default EllipseCreation;
