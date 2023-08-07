import React from 'react';

interface SplineSurfaceInputProps {
    controlPoints: number[][][];
}

const SplineSurfaceInput: React.FC<SplineSurfaceInputProps> = ({ controlPoints }) => {
    return (
        <div>
            <h3>スプライン曲面</h3>
            <div>Control Points:</div>
            {/* Display control points */}
            {controlPoints.map((points, index) => (
                <div key={index}>
                    <div>Control Point Set {index + 1}:</div>
                    {points.map((point, pointIndex) => (
                        <div key={pointIndex}>Point {pointIndex + 1}: {point[0]}, {point[1]}, {point[2]}</div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default SplineSurfaceInput;
