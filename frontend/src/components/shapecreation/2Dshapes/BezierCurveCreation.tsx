import React, { useState } from 'react';

interface BezierCurveCreationProps {
    onCreateBezierCurve: (controlPoints: string[]) => void;
}

const BezierCurveCreation: React.FC<BezierCurveCreationProps> = ({ onCreateBezierCurve }) => {
    const [controlPoints, setControlPoints] = useState<string[]>([]);

    const handleCreateBezierCurve = () => {
        onCreateBezierCurve(controlPoints);
    };

    const handleAddControlPoint = () => {
        setControlPoints([...controlPoints, '']);
    };

    return (
        <div>
            <h3>ベジェ曲線</h3>
            {/* Input fields to add control points */}
            {controlPoints.map((point, index) => (
                <input
                    key={index}
                    type="text"
                    value={point}
                    onChange={(e) => {
                        const updatedPoints = [...controlPoints];
                        updatedPoints[index] = e.target.value;
                        setControlPoints(updatedPoints);
                    }}
                />
            ))}
            <button onClick={handleAddControlPoint}>Add Control Point</button>
            {/* Add more options as needed */}
            <button onClick={handleCreateBezierCurve}>作成</button>
        </div>
    );
};

export default BezierCurveCreation;
