import React, { useState } from 'react';

interface PolygonMeshCreationProps {
    onCreate: (vertices: number[][], polygons: number[][]) => void;
}

const PolygonMeshCreation: React.FC<PolygonMeshCreationProps> = ({ onCreate }) => {
    const [vertices, setVertices] = useState<number[][]>([]);
    const [polygons, setPolygons] = useState<number[][]>([]);
    const [x, setX] = useState<number>(0);
    const [y, setY] = useState<number>(0);
    const [z, setZ] = useState<number>(0);
    const [vertexIndex1, setVertexIndex1] = useState<number>(0);
    const [vertexIndex2, setVertexIndex2] = useState<number>(0);
    const [vertexIndex3, setVertexIndex3] = useState<number>(0);

    const handleCreate = () => {
        onCreate(vertices, polygons);
    };

    return (
        <div>
            <h3>メッシュ（ポリゴンメッシュ）</h3>
            {/* Input fields to add vertices and polygons */}
            <button onClick={() => setVertices([...vertices, [x, y, z]])}>Add Vertex</button>
            <button onClick={() => setPolygons([...polygons, [vertexIndex1, vertexIndex2, vertexIndex3]])}>Add Polygon</button>
            {/* Add more options as needed */}
            <button onClick={handleCreate}>作成</button>
        </div>
    );
};

export default PolygonMeshCreation;
