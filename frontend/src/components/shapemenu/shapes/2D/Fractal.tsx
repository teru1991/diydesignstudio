import React, { useState, useEffect } from 'react';
import ParameterInput from '../../../common/ParameterInput';
import ColorPicker from "../../../common/ColorPicker";
import LineWidthSelector from "../../../common/LineWidthSelector";
import useShapeAPIHandler from "../../../hooks/useShapeAPIHandler";

const FractalComponent: React.FC = () => {
    const [color, setColor] = useState("#000000");
    const [lineWidth, setLineWidth] = useState(1);

    const [iterations, setIterations] = useState("");
    const [scale, setScale] = useState("");

    const isValid = () => iterations !== "" && scale !== "";

    const { sendData, loading, error } = useShapeAPIHandler(
        { iterations, scale },
        color,
        lineWidth,
        isValid
    );

    return (
        <div>
            <ParameterInput label="イテレーション数" value={iterations} onChange={setIterations} />
            <ParameterInput label="スケール" value={scale} onChange={setScale} />
            <ColorPicker value={color} onChange={setColor} />
            <LineWidthSelector value={lineWidth} onChange={setLineWidth} />

            <button onClick={sendData}>図形を作成</button>
            {loading && <p>データ送信中...</p>}
            {error && <p>エラー: {error}</p>}
        </div>
    );
};


export default FractalComponent;
