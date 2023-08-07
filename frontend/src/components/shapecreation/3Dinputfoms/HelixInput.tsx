import React from 'react';

interface HelixInputProps {
    center: number[];
    startRadius: number;
    endRadius: number;
    height: number;
    revolutions: number;
}

const HelixInput: React.FC<HelixInputProps> = ({ center, startRadius, endRadius, height, revolutions }) => {
    return (
        <div>
            <h3>螺旋</h3>
            <div>中心点座標: [{center[0]}, {center[1]}, {center[2]}]</div>
            <div>始点半径: {startRadius}</div>
            <div>終点半径: {endRadius}</div>
            <div>高さ: {height}</div>
            <div>回転数: {revolutions}</div>
        </div>
    );
};

export default HelixInput;
