// NURBSCurveCreation.tsx
import React, { useState } from 'react';

const NURBSCurveCreation = ({ onCreateNURBSCurve }) => {
    const [controlPoints, setControlPoints] = useState('');
    const [knotVector, setKnotVector] = useState('');

    const handleCreateNURBSCurve = () => {
        // Validation and creation logic here
        // ...

        // Call the onCreateNURBSCurve function with the NURBS curve parameters
        onCreateNURBSCurve({ controlPoints, knotVector });
    };

    return (
        <div>
            {/* Input form for NURBS curve */}
            <input
                type="text"
                placeholder="Control Points (comma-separated, e.g., x1,y1,x2,y2,x3,y3)"
                value={controlPoints}
                onChange={(e) => setControlPoints(e.target.value)}
            />
            <input
                type="text"
                placeholder="Knot Vector (comma-separated, e.g., 0,0,0,1,2,3,3,3)"
                value={knotVector}
                onChange={(e) => setKnotVector(e.target.value)}
            />
            <button onClick={handleCreateNURBSCurve}>Create NURBS Curve</button>
        </div>
    );
};

export default NURBSCurveCreation;
