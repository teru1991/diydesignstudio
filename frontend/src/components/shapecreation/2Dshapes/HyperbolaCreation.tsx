import React, { useState } from 'react';

interface HyperbolaCreationProps {
    onCreateHyperbola: (focus: string, vertex: string) => void;
}

const HyperbolaCreation: React.FC<HyperbolaCreationProps> = ({ onCreateHyperbola }) => {
    const [focus, setFocus] = useState('');
    const [vertex, setVertex] = useState('');

    const handleCreateHyperbola = () => {
        // Validation and creation logic here
        // ...

        // Call the onCreateHyperbola function with the hyperbola parameters
        onCreateHyperbola(focus, vertex);
    };

    return (
        <div>
            {/* Input form for hyperbola */}
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
            <button onClick={handleCreateHyperbola}>Create Hyperbola</button>
        </div>
    );
};

export default HyperbolaCreation;
