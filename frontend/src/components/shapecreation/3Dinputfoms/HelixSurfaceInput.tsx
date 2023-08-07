import React from 'react';

interface HelixSurfaceInputProps {
    center: number[];
    startRadius: number;
    endRadius: number;
    height: number;
    revolutions: number;
}

const HelixSurfaceInput: React.FC<HelixSurfaceInputProps> = ({ center, startRadius, endRadius, height, revolutions }) => {
    return (
        <div>
            <h3>螺旋曲面</h3>
            <div>Center: {center[0]}, {center[1]}, {center[2]}</div>
            <div>Start Radius: {startRadius}</div>
            <div>End Radius: {endRadius}</div>
            <div>Height: {height}</div>
            <div>Revolutions: {revolutions}</div>
        </div>
    );
};

export default HelixSurfaceInput;
