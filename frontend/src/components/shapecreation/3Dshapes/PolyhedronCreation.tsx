import React, { useState } from 'react';

interface PolyhedronCreationProps {
    onCreate: (vertices: number[][]) => void;
}

const PolyhedronCreation: React.FC<PolyhedronCreationProps> = ({ onCreate }) => {
    const [vertices, setVertices] = useState<number[][]>([[0, 0, 0], [1, 0, 0], [0, 1, 0], [0, 0, 1]]);

    const handleCreate = () => {
        onCreate(vertices);
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

    return (
        <div>
            <h3>多面体</h3>
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
            <button onClick={handleCreate}>作成</button>
        </div>
    );
};

export default PolyhedronCreation;
