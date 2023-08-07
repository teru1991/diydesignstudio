// RectangleCreation.tsx
import React, { useState } from 'react';

const RectangleCreation = ({ onCreateRectangle }) => {
    const [topLeft, setTopLeft] = useState('');
    const [bottomRight, setBottomRight] = useState('');

    const handleCreateRectangle = () => {
        // Validation and creation logic here
        // ...

        // Call the onCreateRectangle function with the rectangle parameters
        onCreateRectangle({ topLeft, bottomRight });
    };

    return (
        <div>
            {/* Input form for rectangle */}
            <input
                type="text"
                placeholder="Top Left Point (x,y)"
                value={topLeft}
                onChange={(e) => setTopLeft(e.target.value)}
            />
            <input
                type="text"
                placeholder="Bottom Right Point (x,y)"
                value={bottomRight}
                onChange={(e) => setBottomRight(e.target.value)}
            />
            <button onClick={handleCreateRectangle}>Create Rectangle</button>
        </div>
    );
};

export default RectangleCreation;
