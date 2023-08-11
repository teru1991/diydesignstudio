import React, { useState } from 'react';
import ParameterInput from '../../../common/ParameterInput';

const DiamondComponent: React.FC<{ onChange?: (parameters: { diagonal1: string, diagonal2: string }) => void }> = ({ onChange }) => {
    const [diagonal1, setDiagonal1] = useState<string>('');
    const [diagonal2, setDiagonal2] = useState<string>('');

    const handleInputChange = (value: string, setter: React.Dispatch<React.SetStateAction<string>>) => {
        setter(value);
        if (onChange) {
            onChange({ diagonal1, diagonal2 });
        }
    };

    return (
        <div>
            <ParameterInput
                label="対角線1"
                value={diagonal1}
                onChange={(value) => handleInputChange(value, setDiagonal1)}
            />
            <ParameterInput
                label="対角線2"
                value={diagonal2}
                onChange={(value) => handleInputChange(value, setDiagonal2)}
            />
        </div>
    );
};

export default DiamondComponent;
