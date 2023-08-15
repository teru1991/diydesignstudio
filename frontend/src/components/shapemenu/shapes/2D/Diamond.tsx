import React, { useState } from 'react';
import ParameterInput from '../../../common/ParameterInput';
import ColorPicker from "../../../common/ColorPicker";
import LineWidthSelector from "../../../common/LineWidthSelector";
import useShapeAPIHandler from "../../../hooks/useShapeAPIHandler";

const DiamondComponent: React.FC<{ onChange?: (parameters: { diagonal1: string, diagonal2: string }) => void }> = ({ onChange }) => {
    const [color, setColor] = useState("#000000");
    const [lineWidth, setLineWidth] = useState(1);

    const [diagonal1, setDiagonal1] = useState<string>('');
    const [diagonal2, setDiagonal2] = useState<string>('');

    const handleInputChange = (value: string, setter: React.Dispatch<React.SetStateAction<string>>) => {
        setter(value);
        if (onChange) {
            onChange({ diagonal1, diagonal2 });
        }
    };

    const isValid = () => diagonal1 !== "" && diagonal2 !== "";

    const { sendData, loading, error } = useShapeAPIHandler(
        { diagonal1, diagonal2 },
        color,
        lineWidth,
        isValid
    );

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

            <button onClick={sendData}>図形を作成</button>
            {loading && <p>データ送信中...</p>}
            {error && <p>エラー: {error}</p>}
        </div>
    );
};


export default DiamondComponent;
