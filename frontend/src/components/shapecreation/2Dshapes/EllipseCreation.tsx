import React, { useState } from 'react';

interface EllipseCreationProps {
    onCreateEllipse: (center: string, majorAxis: string, minorAxis: string) => void;
}

const EllipseCreation: React.FC<EllipseCreationProps> = ({ onCreateEllipse }) => {
    const [center, setCenter] = useState<string>('');
    const [majorAxis, setMajorAxis] = useState<string>('');
    const [minorAxis, setMinorAxis] = useState<string>('');

    const handleCreate = () => {
        onCreateEllipse(center, majorAxis, minorAxis);
    };

    return (
        <div>
            <h3>楕円</h3>
            {/* Input fields for ellipse properties */}
            <input type="text" value={center} onChange={(e) => setCenter(e.target.value)} />
            <input type="text" value={majorAxis} onChange={(e) => setMajorAxis(e.target.value)} />
            <input type="text" value={minorAxis} onChange={(e) => setMinorAxis(e.target.value)} />
            {/* Add more options as needed */}
            <button onClick={handleCreate}>作成</button>
        </div>
    );
};

export default EllipseCreation;
