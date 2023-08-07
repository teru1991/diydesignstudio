import React, { useState } from 'react';

interface DimensionLineCreationProps {
    onCreateDimensionLine: (startPoint: string, endPoint: string, dimensionValue: string) => void;
}

const DimensionLineCreation: React.FC<DimensionLineCreationProps> = ({ onCreateDimensionLine }) => {
    const [startPoint, setStartPoint] = useState<string>('');
    const [endPoint, setEndPoint] = useState<string>('');
    const [dimensionValue, setDimensionValue] = useState<string>('');

    const handleCreate = () => {
        onCreateDimensionLine(startPoint, endPoint, dimensionValue);
    };

    return (
        <div>
            <h3>寸法線</h3>
            {/* Input fields for dimension line properties */}
            <input type="text" value={startPoint} onChange={(e) => setStartPoint(e.target.value)} />
            <input type="text" value={endPoint} onChange={(e) => setEndPoint(e.target.value)} />
            <input type="text" value={dimensionValue} onChange={(e) => setDimensionValue(e.target.value)} />
            {/* Add more options as needed */}
            <button onClick={handleCreate}>作成</button>
        </div>
    );
};

export default DimensionLineCreation;
