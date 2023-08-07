import React, { useState } from 'react';

interface NURBSCurveCreationProps {
    onCreateNURBSCurve: (controlPoints: string, knotVector: string) => void;
}

const NURBSCurveCreation: React.FC<NURBSCurveCreationProps> = ({ onCreateNURBSCurve }) => {
    const [controlPoints, setControlPoints] = useState('');
    const [knotVector, setKnotVector] = useState('');

    const handleCreateNURBSCurve = () => {
        // Validation and creation logic here
        // ...

        // Call the onCreateNURBSCurve function with the NURBS curve parameters
        onCreateNURBSCurve(controlPoints, knotVector);
    };

    return (
        <div>
            {/* Input form for NURBS curve */}
            <input
                type="text"
                placeholder="Control Points (comma-separated, e.g., x1,y1,z1,w1,x2,y2,z2,w2,...)"
                value={controlPoints}
                onChange={(e) => setControlPoints(e.target.value)}
            />
            <input
                type="text"
                placeholder="Knot Vector (comma-separated, e.g., u1,u2,u3,u4,...)"
                value={knotVector}
                onChange={(e) => setKnotVector(e.target.value)}
            />
            <button onClick={handleCreateNURBSCurve}>Create NURBS Curve</button>
        </div>
    );
};

export default NURBSCurveCreation;
