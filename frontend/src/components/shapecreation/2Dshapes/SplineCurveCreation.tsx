import React, { useState } from 'react';

interface SplineCurveCreationProps {
    onCreateSplineCurve: (controlPoints: number[][]) => void;
}

const SplineCurveCreation: React.FC<SplineCurveCreationProps> = ({ onCreateSplineCurve }) => {
    const [controlPointsStr, setControlPointsStr] = useState('');
    const [controlPoints, setControlPoints] = useState<number[][]>([]);

    const handleCreateSplineCurve = () => {
        // Parse the comma-separated string to create the control points list
        const points = controlPointsStr.split(',').map((pointStr) => {
            const [x, y] = pointStr.split(',').map(parseFloat);
            return [x, y];
        });

        // Update the control points state
        setControlPoints(points);

        // Call the onCreateSplineCurve function with the spline curve parameters
        onCreateSplineCurve(points);
    };

    return (
        <div>
            {/* Input form for spline curve */}
            <input
                type="text"
                placeholder="Control Points (comma-separated, e.g., x1,y1,x2,y2,x3,y3)"
                value={controlPointsStr}
                onChange={(e) => setControlPointsStr(e.target.value)}
            />
            <button onClick={handleCreateSplineCurve}>作成</button>
        </div>
    );
};

export default SplineCurveCreation;
