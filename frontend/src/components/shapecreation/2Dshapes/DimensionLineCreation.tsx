// DimensionLineCreation.tsx
import React, { useState } from 'react';

const DimensionLineCreation = ({ onCreateDimensionLine }) => {
    const [startPoint, setStartPoint] = useState('');
    const [endPoint, setEndPoint] = useState('');
    const [dimensionValue, setDimensionValue] = useState('');

    const handleCreateDimensionLine = () => {
        // Validation and creation logic here
        // ...

        // Call the onCreateDimensionLine function with the dimension line parameters
        onCreateDimensionLine({ startPoint, endPoint, dimensionValue });
    };

    return (
        <div>
            {/* Input form for dimension line */}
            <input
                type="text"
                placeholder="Start Point (x,y)"
                value={startPoint}
                onChange={(e) => setStartPoint(e.target.value)}
            />
            <input
                type="text"
                placeholder="End Point (x,y)"
                value={endPoint}
                onChange={(e) => setEndPoint(e.target.value)}
            />
            <input
                type="text"
                placeholder="Dimension Value"
                value={dimensionValue}
                onChange={(e) => setDimensionValue(e.target.value)}
            />
            <button onClick={handleCreateDimensionLine}>Create Dimension Line</button>
        </div>
    );
};

export default DimensionLineCreation;
