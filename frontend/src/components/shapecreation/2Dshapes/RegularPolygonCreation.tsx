// RegularPolygonCreation.tsx
import React, { useState } from 'react';

const RegularPolygonCreation = ({ onCreateRegularPolygon }) => {
    const [center, setCenter] = useState('');
    const [radius, setRadius] = useState('');
    const [edges, setEdges] = useState('');
    const [angleOffset, setAngleOffset] = useState('');

    const handleCreateRegularPolygon = () => {
        // Validation and creation logic here
        // ...

        // Call the onCreateRegularPolygon function with the regular polygon parameters
        onCreateRegularPolygon({ center, radius, edges, angleOffset });
    };

    return (
        <div>
            {/* Input form for regular polygon */}
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
                placeholder="Edges"
                value={edges}
                onChange={(e) => setEdges(e.target.value)}
            />
            <input
                type="text"
                placeholder="Angle Offset"
                value={angleOffset}
                onChange={(e) => setAngleOffset(e.target.value)}
            />
            <button onClick={handleCreateRegularPolygon}>Create Regular Polygon</button>
        </div>
    );
};

export default RegularPolygonCreation;
