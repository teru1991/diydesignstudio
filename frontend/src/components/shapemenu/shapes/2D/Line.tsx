import React, { useState } from 'react';
import ParameterInput from '../../../common/ParameterInput';
import ColorPicker from "../../../common/ColorPicker";
import LineWidthSelector from "../../../common/LineWidthSelector";
import useShapeAPIHandler from "../../../hooks/useShapeAPIHandler";

const LineComponent: React.FC = () => {
    const [color, setColor] = useState("#000000");
    const [lineWidth, setLineWidth] = useState(1);

    const [startPoint, setStartPoint] = useState("");
    const [endPoint, setEndPoint] = useState("");

    const isValid = () => startPoint !== "" && endPoint !== "";

    const { sendData, loading, error } = useShapeAPIHandler(
        { startPoint, endPoint },
        color,
        lineWidth,
        isValid
    );

    return (
        <div>
            <ParameterInput label="始点" value={startPoint} onChange={setStartPoint} />
            <ParameterInput label="終点" value={endPoint} onChange={setEndPoint} />
            <ColorPicker value={color} onChange={setColor} />
            <LineWidthSelector value={lineWidth} onChange={setLineWidth} />

            <button onClick={sendData}>図形を作成</button>
            {loading && <p>データ送信中...</p>}
            {error && <p>エラー: {error}</p>}
        </div>
    );
};

export default LineComponent;
