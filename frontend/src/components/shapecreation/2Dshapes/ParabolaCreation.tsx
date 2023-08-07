// ParabolaCreation.tsx
import React, { useState } from 'react';

const ParabolaCreation = ({ onCreateParabola }) => {
    const [focus, setFocus] = useState('');
    const [vertex, setVertex] = useState('');

    const handleCreateParabola = () => {
        // Validation and creation logic here
        // ...

        // Call the onCreateParabola function with the parabola parameters
        onCreateParabola({ focus, vertex });
    };

    return (
        <div>
            {/* Input form for parabola */}
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
            <button onClick={handleCreateParabola}>Create Parabola</button>
        </div>
    );
};

export default ParabolaCreation;
