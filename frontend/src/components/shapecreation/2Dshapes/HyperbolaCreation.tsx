// HyperbolaCreation.tsx
import React, { useState } from 'react';

const HyperbolaCreation = ({ onCreateHyperbola }) => {
    const [focus, setFocus] = useState('');
    const [vertex, setVertex] = useState('');

    const handleCreateHyperbola = () => {
        // Validation and creation logic here
        // ...

        // Call the onCreateHyperbola function with the hyperbola parameters
        onCreateHyperbola({ focus, vertex });
    };

    return (
        <div>
            {/* Input form for hyperbola */}
            <input
                type="text"
                placeholder="Focus Point (x,y)"
                value={focus}
                onChange={(e) => setFocus(e.target.value)}
            />
            <input
                type="text"
                placeholder="Vertex Point (x,y)"
                value={vertex}
                onChange={(e) => setVertex(e.target.value)}
            />
            <button onClick={handleCreateHyperbola}>Create Hyperbola</button>
        </div>
    );
};

export default HyperbolaCreation;
