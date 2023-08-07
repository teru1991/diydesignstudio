import React from 'react';

interface ConeInputProps {
    vertex: number[];
    radius: number;
    height: number;
}

const ConeInput: React.FC<ConeInputProps> = ({ vertex, radius, height }) => {
    return (
        <div>
            <h3>円錐</h3>
            <div>頂点座標: [{vertex[0]}, {vertex[1]}, {vertex[2]}]</div>
            <div>半径: {radius}</div>
            <div>高さ: {height}</div>
        </div>
    );
};

export default ConeInput;
