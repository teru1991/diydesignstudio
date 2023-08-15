import React, { useState, useEffect } from 'react';
import ParameterInput from '../../../common/ParameterInput';
import ColorPicker from "../../../common/ColorPicker";
import LineWidthSelector from "../../../common/LineWidthSelector";
import useShapeAPIHandler from "../../../hooks/useShapeAPIHandler";

const OffsetCurveComponent: React.FC = () => {
    const [color, setColor] = useState("#000000");
    const [lineWidth, setLineWidth] = useState(1);

    const [originalCurve, setOriginalCurve] = useState("");
    const [distance, setDistance] = useState("");

    const isValid = () => originalCurve !== "" && distance !== "";

    const { sendData, loading, error } = useShapeAPIHandler(
        { originalCurve, distance },
        color,
        lineWidth,
        isValid
    );

    return (
        <div>
            <ParameterInput label="元の曲線" value={originalCurve} onChange={setOriginalCurve} />
            <ParameterInput label="距離" value={distance} onChange={setDistance} />
            <ColorPicker value={color} onChange={setColor} />
            <LineWidthSelector value={lineWidth} onChange={setLineWidth} />

            <button onClick={sendData}>図形を作成</button>
            {loading && <p>データ送信中...</p>}
            {error && <p>エラー: {error}</p>}
        </div>
    );
};


export default OffsetCurveComponent;
