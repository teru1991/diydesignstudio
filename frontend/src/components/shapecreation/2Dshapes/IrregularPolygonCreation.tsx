import React, { useState } from 'react';

interface IrregularPolygonCreationProps {
    onCreateIrregularPolygon: (vertices: number[][]) => void;
}

const IrregularPolygonCreation: React.FC<IrregularPolygonCreationProps> = ({ onCreateIrregularPolygon }) => {
    const [vertices, setVertices] = useState('');

    const handleCreateIrregularPolygon = () => {
        // Validation and creation logic here
        // ...

        // Convert the input string to an array of coordinates
        const vertexArray = vertices.split(';').map((vertex) => vertex.split(',').map(Number));

        // Call the onCreateIrregularPolygon function with the irregular polygon parameters
        onCreateIrregularPolygon(vertexArray);
    };

    return (
        <div>
            {/* Input form for irregular polygon */}
            <input
                type="text"
                placeholder="Vertices (x1,y1;x2,y2;x3,y3;...)"
                value={vertices}
                onChange={(e) => setVertices(e.target.value)}
            />
            <button onClick={handleCreateIrregularPolygon}>Create Irregular Polygon</button>
        </div>
    );
};

export default IrregularPolygonCreation;
