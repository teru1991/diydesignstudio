import React, { useState } from 'react';

interface ParabolaCreationProps {
    onCreateParabola: (focus: string, vertex: string) => void;
}

const ParabolaCreation: React.FC<ParabolaCreationProps> = ({ onCreateParabola }) => {
    const [focus, setFocus] = useState('');
    const [vertex, setVertex] = useState('');

    const handleCreateParabola = () => {
        // Validation and creation logic here
        // ...

        // Call the onCreateParabola function with the parabola parameters
        onCreateParabola(focus, vertex);
    };

    return (
        <div>
            {/* Input form for parabola */}
            <input
                type="text"
                placeholder="Focus Point (x1,y1)"
                value={focus}
                onChange={(e) => setFocus(e.target.value)}
            />
            <input
                type="text"
                placeholder="Vertex Point (x2,y2)"
                value={vertex}
                onChange={(e) => setVertex(e.target.value)}
            />
            <button onClick={handleCreateParabola}>Create Parabola</button>
        </div>
    );
};

export default ParabolaCreation;
