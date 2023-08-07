import React from 'react';

interface TextureMappedShapeInputProps {
    vertices: number[][];
    textureCoordinates: number[][];
}

const TextureMappedShapeInput: React.FC<TextureMappedShapeInputProps> = ({ vertices, textureCoordinates }) => {
    return (
        <div>
            <h3>テクスチャマッピングされた形状</h3>
            <div>
                {vertices.map((vertex, index) => (
                    <div key={index}>頂点座標 {index}: [{vertex[0]}, {vertex[1]}, {vertex[2]}]</div>
                ))}
            </div>
            <div>
                {textureCoordinates.map((coord, index) => (
                    <div key={index}>テクスチャ座標 {index}: [{coord[0]}, {coord[1]}]</div>
                ))}
            </div>
        </div>
    );
};

export default TextureMappedShapeInput;
