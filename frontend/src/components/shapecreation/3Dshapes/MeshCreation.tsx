import React, { useState } from 'react';

interface MeshCreationProps {
    onCreate: (vertices: number[][], polygons: number[][]) => void;
}

const MeshCreation: React.FC<MeshCreationProps> = ({ onCreate }) => {
    const [vertices, setVertices] = useState<number[][]>([[0, 0, 0], [1, 0, 0], [0, 1, 0], [0, 0, 1]]);
    const [polygons, setPolygons] = useState<number[][]>([[0, 1, 2], [0, 2, 3], [0, 1, 3], [1, 2, 3]]);

    const handleCreate = () => {
        onCreate(vertices, polygons);
    };

    const handleVertexChange = (index: number, coordinate: 'x' | 'y' | 'z', value: number) => {
        const updatedVertices = [...vertices];
        updatedVertices[index] = [...vertices[index]];
        switch (coordinate) {
            case 'x':
                updatedVertices[index][0] = value;
                break;
            case 'y':
                updatedVertices[index][1] = value;
                break;
            case 'z':
                updatedVertices[index][2] = value;
                break;
            default:
                break;
        }
        setVertices(updatedVertices);
    };

    const handlePolygonChange = (index: number, vertexIndex: number, value: number) => {
        const updatedPolygons = [...polygons];
        updatedPolygons[index] = [...polygons[index]];
        updatedPolygons[index][vertexIndex] = value;
        setPolygons(updatedPolygons);
    };

    return (
        <div>
            <h3>メッシュ</h3>
            <div>
                {vertices.map((vertex, index) => (
                    <div key={index}>
                        <label>頂点{index + 1}座標:</label>
                        <input type="number" value={vertex[0]} onChange={(e) => handleVertexChange(index, 'x', +e.target.value)} />
                        <input type="number" value={vertex[1]} onChange={(e) => handleVertexChange(index, 'y', +e.target.value)} />
                        <input type="number" value={vertex[2]} onChange={(e) => handleVertexChange(index, 'z', +e.target.value)} />
                    </div>
                ))}
            </div>
            <div>
                {polygons.map((polygon, index) => (
                    <div key={index}>
                        <label>ポリゴン{index + 1}:</label>
                        <input type="number" value={polygon[0]} onChange={(e) => handlePolygonChange(index, 0, +e.target.value)} />
                        <input type="number" value={polygon[1]} onChange={(e) => handlePolygonChange(index, 1, +e.target.value)} />
                        <input type="number" value={polygon[2]} onChange={(e) => handlePolygonChange(index, 2, +e.target.value)} />
                    </div>
                ))}
            </div>
            <button onClick={handleCreate}>作成</button>
        </div>
    );
};

export default MeshCreation;
