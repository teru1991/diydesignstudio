import React from 'react';

interface SolidModelInputProps {
    shapes: JSX.Element[];
}

const SolidModelInput: React.FC<SolidModelInputProps> = ({ shapes }) => {
    return (
        <div>
            {shapes.map((shape, index) => (
                <React.Fragment key={index}>
                    {shape}
                    <hr />
                </React.Fragment>
            ))}
        </div>
    );
};

export default SolidModelInput;
