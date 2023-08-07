import React, { useState } from 'react';

interface PolylineCreationProps {
    onCreatePolyline: (vertices: number[][]) => void;
}

const PolylineCreation: React.FC<PolylineCreationProps> = ({ onCreatePolyline }) => {
    const [vertices, setVertices] = useState('');

    const handleCreatePolyline = () => {
        // Validation and creation logic here
        // ...

        // Convert the input string to an array of coordinates
        const vertexArray = vertices.split(';').map((vertex) => vertex.split(',').map(Number));

        // Call the onCreatePolyline function with the polyline parameters
        onCreatePolyline(vertexArray);
    };

    return (
        <div>
            {/* Input form for polyline */}
            <input
                type="text"
                placeholder="Vertices (x1,y1;x2,y2;x3,y3;...)"
                value={vertices}
                onChange={(e) => setVertices(e.target.value)}
            />
            <button onClick={handleCreatePolyline}>Create Polyline</button>
        </div>
    );
};

export default PolylineCreation;
