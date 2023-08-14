import React, { useState } from 'react';
import ParameterInput from '../../../common/ParameterInput';
import ColorPicker from "../../../common/ColorPicker";
import LineWidthSelector from "../../../common/LineWidthSelector";
import useShapeAPIHandler from "../../../hooks/useShapeAPIHandler";

const DiamondComponent: React.FC<{ onChange?: (parameters: { diagonal1: string, diagonal2: string }) => void }> = ({ onChange }) => {
    const [diagonal1, setDiagonal1] = useState<string>('');
    const [diagonal2, setDiagonal2] = useState<string>('');
    const [color, setColor] = useState("#000000");  // Default black color
    const [lineWidth, setLineWidth] = useState(1);  // Default line width
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
            <ColorPicker value={color} onChange={setColor} />
            <LineWidthSelector value={lineWidth} onChange={setLineWidth} />
        </div>
    );
};

export default DiamondComponent;
