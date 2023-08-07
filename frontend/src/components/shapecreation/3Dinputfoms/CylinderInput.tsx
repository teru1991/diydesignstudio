import React from 'react';

interface CylinderInputProps {
    center: number[];
    radius: number;
    height: number;
}

const CylinderInput: React.FC<CylinderInputProps> = ({ center, radius, height }) => {
    return (
        <div>
            <h3>円柱</h3>
            <div>中心点座標: [{center[0]}, {center[1]}, {center[2]}]</div>
            <div>半径: {radius}</div>
            <div>高さ: {height}</div>
        </div>
    );
};

export default CylinderInput;
