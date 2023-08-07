import React from 'react';

interface CubeInputProps {
    center: number[];
    width: number;
    height: number;
    depth: number;
}

const CubeInput: React.FC<CubeInputProps> = ({ center, width, height, depth }) => {
    return (
        <div>
            <h3>立方体</h3>
            <div>中心点座標: [{center[0]}, {center[1]}, {center[2]}]</div>
            <div>幅: {width}</div>
            <div>高さ: {height}</div>
            <div>奥行き: {depth}</div>
        </div>
    );
};

export default CubeInput;
