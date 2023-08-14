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

    

    // Additional state for Diamond parameters
    const [param1, setParam1] = useState("");
    const [param2, setParam2] = useState("");

    // 1. Add useState definitions
    const [isSent, setIsSent] = useState(false);
    const [responseData, setResponseData] = useState(null);

    // 2. Add the validation function for Diamond parameters
    const validateDiamondParams = (params: { param1: string; param2: string }) => {
        return params.param1 !== "" && params.param2 !== "";
    };

    // 3. Use the custom hook
    const { sendData, loading, error } = useShapeAPIHandler(
        { param1, param2 },
        color,
        lineWidth,
        validateDiamondParams
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
                {responseData && <p>バックエンドからの応答: {JSON.stringify(responseData)}</p>}
    </div>
    );
};

export default DiamondComponent;
