// CircleCreation.tsx
import React, { useState } from 'react';

const CircleCreation = ({ onCreateCircle }) => {
    const [center, setCenter] = useState('');
    const [radius, setRadius] = useState('');

    const handleCreateCircle = () => {
        // Validation and creation logic here
        // ...

        // Call the onCreateCircle function with the circle parameters
        onCreateCircle({ center, radius });
    };

    return (
        <div>
            {/* Input form for circle */}
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
            <button onClick={handleCreateCircle}>Create Circle</button>
        </div>
    );
};

export default CircleCreation;
