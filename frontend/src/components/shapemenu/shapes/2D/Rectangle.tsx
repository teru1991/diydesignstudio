import React, { useState } from 'react';
import ParameterInput from '../../../common/ParameterInput';

const RectangleComponent: React.FC<{ onChange?: (parameters: { width: string, height: string }) => void }> = ({ onChange }) => {
    const [width, setWidth] = useState<string>('');
    const [height, setHeight] = useState<string>('');

    const handleInputChange = (value: string, setter: React.Dispatch<React.SetStateAction<string>>) => {
        setter(value);
        if (onChange) {
            onChange({ width, height });
        }
    };

    return (
        <div>
            <ParameterInput
                label="幅"
                value={width}
                onChange={(value) => handleInputChange(value, setWidth)}
            />
            <ParameterInput
                label="高さ"
                value={height}
                onChange={(value) => handleInputChange(value, setHeight)}
            />
        </div>
    );
};

export default RectangleComponent;
