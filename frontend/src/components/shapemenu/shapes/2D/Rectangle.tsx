import React, { useState } from 'react';
import ParameterInput from '../../../common/ParameterInput';
import ColorPicker from "../../../common/ColorPicker";
import LineWidthSelector from "../../../common/LineWidthSelector";
import useShapeAPIHandler from "../../../hooks/useShapeAPIHandler";


const RectangleComponent: React.FC<{ onChange?: (parameters: { width: string, height: string }) => void }> = ({ onChange }) => {
    const [width, setWidth] = useState<string>('');
    const [height, setHeight] = useState<string>('');
    const [color, setColor] = useState("#000000");  // Default black color
    const [lineWidth, setLineWidth] = useState(1);  // Default line width
    const handleInputChange = (value: string, setter: React.Dispatch<React.SetStateAction<string>>) => {
        setter(value);
        if (onChange) {
            onChange({ width, height });
        }
    };

    

    // Additional state for Rectangle parameters
    const [param1, setParam1] = useState("");
    const [param2, setParam2] = useState("");

    // 1. Add useState definitions
    const [isSent, setIsSent] = useState(false);
    const [responseData, setResponseData] = useState(null);

    // 2. Add the validation function for Rectangle parameters
    const validateRectangleParams = (params: { param1: string; param2: string }) => {
        return params.param1 !== "" && params.param2 !== "";
    };

    // 3. Use the custom hook
    const { sendData, loading, error } = useShapeAPIHandler(
        { param1, param2 },
        color,
        lineWidth,
        validateRectangleParams
    );

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
            <ColorPicker value={color} onChange={setColor} />
            <LineWidthSelector value={lineWidth} onChange={setLineWidth} />
        
                <button onClick={sendData}>図形を作成</button>
                {loading && <p>データ送信中...</p>}
                {error && <p>エラー: {error}</p>}
                {responseData && <p>バックエンドからの応答: {JSON.stringify(responseData)}</p>}
    </div>
    );
};

export default RectangleComponent;
