import React, { useState } from 'react';

interface BladeThicknessProps {
    onThicknessChange: (thickness: number) => void;
}

const BladeThicknessComponent: React.FC<BladeThicknessProps> = ({ onThicknessChange }) => {
    const [thickness, setThickness] = useState<number>(3); // デフォルト値は3mm

    const handleThicknessChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newThickness = Number(e.target.value);
        setThickness(newThickness);
        onThicknessChange(newThickness);
    };

    return (
        <div>
            <label>刃物の厚み:</label>
            <input
                type="number"
                value={thickness}
                onChange={handleThicknessChange}
                min={0}
            />
            <span>mm</span>
        </div>
    );
};

export default BladeThicknessComponent;
