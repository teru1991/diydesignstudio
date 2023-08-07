import React from 'react';

interface MeshInputProps {
    vertices: number[][];
    polygons: number[][];
}

const MeshInput: React.FC<MeshInputProps> = ({ vertices, polygons }) => {
    return (
        <div>
            <h3>メッシュ</h3>
            <div>
                {vertices.map((vertex, index) => (
                    <div key={index}>頂点{index + 1}座標: [{vertex[0]}, {vertex[1]}, {vertex[2]}]</div>
                ))}
            </div>
            <div>
                {polygons.map((polygon, index) => (
                    <div key={index}>ポリゴン{index + 1}: [{polygon[0]}, {polygon[1]}, {polygon[2]}]</div>
                ))}
            </div>
        </div>
    );
};

export default MeshInput;
