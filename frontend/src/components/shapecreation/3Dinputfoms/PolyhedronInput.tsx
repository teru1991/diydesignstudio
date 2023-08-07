import React from 'react';

interface PolyhedronInputProps {
    vertices: number[][];
}

const PolyhedronInput: React.FC<PolyhedronInputProps> = ({ vertices }) => {
    return (
        <div>
            <h3>多面体</h3>
            <div>
                {vertices.map((vertex, index) => (
                    <div key={index}>頂点{index + 1}座標: [{vertex[0]}, {vertex[1]}, {vertex[2]}]</div>
                ))}
            </div>
        </div>
    );
};

export default PolyhedronInput;
