import React, { useState } from 'react';

interface LineCreationProps {
    onCreateLine: (startPoint: string, endPoint: string) => void;
}

const LineCreation: React.FC<LineCreationProps> = ({ onCreateLine }) => {
    const [startPoint, setStartPoint] = useState('');
    const [endPoint, setEndPoint] = useState('');

    const handleCreateLine = () => {
        // Validation and creation logic here
        // ...

        // Call the onCreateLine function with the line parameters
        onCreateLine(startPoint, endPoint);
    };

    return (
        <div>
            {/* Input form for line */}
            <input
                type="text"
                placeholder="Start Point (x1,y1)"
                value={startPoint}
                onChange={(e) => setStartPoint(e.target.value)}
            />
            <input
                type="text"
                placeholder="End Point (x2,y2)"
                value={endPoint}
                onChange={(e) => setEndPoint(e.target.value)}
            />
            <button onClick={handleCreateLine}>Create Line</button>
        </div>
    );
};

export default LineCreation;
