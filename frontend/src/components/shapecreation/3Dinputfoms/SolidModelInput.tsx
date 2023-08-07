import React from 'react';

interface SolidModelInputProps {
    shapes: React.ReactNode[];
}

const SolidModelInput: React.FC<SolidModelInputProps> = ({ shapes }) => {
    return (
        <div>
            <h3>ソリッドモデル</h3>
            {/* Display each shape in the solid model */}
            {shapes.map((shape, index) => (
                <div key={index}>Shape {index + 1}:</div>
            {shape}
                <hr />
                ))}
        </div>
    );
};

export default SolidModelInput;
