import React, { useState } from 'react';

interface TextureMappedShapeCreationProps {
    onCreate: (vertices: number[][], textureCoordinates: number[][]) => void;
}

const TextureMappedShapeCreation: React.FC<TextureMappedShapeCreationProps> = ({ onCreate }) => {
    const [vertices, setVertices] = useState<number[][]>([[0, 0, 0], [1, 0, 0], [1, 1, 0], [0, 1, 0]]);
    const [textureCoordinates, setTextureCoordinates] = useState<number[][]>([[0, 0], [1, 0], [1, 1], [0, 1]]);

    const handleCreate = () => {
        onCreate(vertices, textureCoordinates);
    };

    const handleVerticesChange = (index: number, axis: number, value: number) => {
        const newVertices = vertices.map((vertex, i) => (i === index ? [...vertex.slice(0, axis), value, ...vertex.slice(axis + 1)] : vertex));
        setVertices(newVertices);
    };

    const handleTextureCoordinatesChange = (index: number, axis: number, value: number) => {
        const newTextureCoordinates = textureCoordinates.map((coord, i) =>
            i === index ? [...coord.slice(0, axis), value, ...coord.slice(axis + 1)] : coord
        );
        setTextureCoordinates(newTextureCoordinates);
    };

    return (
        <div>
            <h3>テクスチャマッピングされた形状</h3>
            <div>
                {vertices.map((vertex, index) => (
                    <div key={index}>
                        <label>頂点座標 {index}:</label>
                        <input type="number" value={vertex[0]} onChange={(e) => handleVerticesChange(index, 0, +e.target.value)} />
                        <input type="number" value={vertex[1]} onChange={(e) => handleVerticesChange(index, 1, +e.target.value)} />
                        <input type="number" value={vertex[2]} onChange={(e) => handleVerticesChange(index, 2, +e.target.value)} />
                    </div>
                ))}
            </div>
            <div>
                {textureCoordinates.map((coord, index) => (
                    <div key={index}>
                        <label>テクスチャ座標 {index}:</label>
                        <input type="number" value={coord[0]} onChange={(e) => handleTextureCoordinatesChange(index, 0, +e.target.value)} />
                        <input type="number" value={coord[1]} onChange={(e) => handleTextureCoordinatesChange(index, 1, +e.target.value)} />
                    </div>
                ))}
            </div>
            <button onClick={handleCreate}>作成</button>
        </div>
    );
};

export default TextureMappedShapeCreation;
