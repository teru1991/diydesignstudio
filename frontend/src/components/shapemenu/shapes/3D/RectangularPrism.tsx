import React, { useState } from 'react';
import ParameterInput from '../../../common/ParameterInput';
import ColorPicker from "../../../common/ColorPicker";
import LineWidthSelector from "../../../common/LineWidthSelector";
import useShapeAPIHandler from "../../../hooks/useShapeAPIHandler";

const RectangularPrismComponent: React.FC = () => {
    const [color, setColor] = useState("#000000");  // Default black color
    const [lineWidth, setLineWidth] = useState(1);  // Default line width

    const [length, setLength] = useState("");
    const [width, setWidth] = useState("");
    const [height, setHeight] = useState("");

    const validateRectangularPrismParams = (params: { length: string; width: string; height: string }) => {
        return params.length !== "" && params.width !== "" && params.height !== "";
    };

    const { sendData, loading, error, responseData } = useShapeAPIHandler(
        { length, width, height },
        color,
        lineWidth,
        validateRectangularPrismParams
    );

    return (
        <div>
            <ParameterInput label="長さ" value={length} onChange={setLength} />
            <ParameterInput label="幅" value={width} onChange={setWidth} />
            <ParameterInput label="高さ" value={height} onChange={setHeight} />
            <ColorPicker value={color} onChange={setColor} />
            <LineWidthSelector value={lineWidth} onChange={setLineWidth} />

            <button onClick={sendData}>図形を作成</button>
            {loading && <p>データ送信中...</p>}
            {error && <p>エラー: {error}</p>}
            {responseData && <p>バックエンドからの応答: {JSON.stringify(responseData)}</p>}
        </div>
    );
};

export default RectangularPrismComponent;
