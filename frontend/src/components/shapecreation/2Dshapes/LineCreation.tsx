// LineCreation.tsx
import React, { useState } from 'react';

const LineCreation = ({ onCreateLine }) => {
    const [startPoint, setStartPoint] = useState('');
    const [endPoint, setEndPoint] = useState('');

    const handleCreateLine = () => {
        // Validation and creation logic here
        // ...

        // Call the onCreateLine function with the line parameters
        onCreateLine({ startPoint, endPoint });
    };

    return (
        <div>
            {/* Input form for line */}
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
            <button onClick={handleCreateLine}>Create Line</button>
        </div>
    );
};

export default LineCreation;
