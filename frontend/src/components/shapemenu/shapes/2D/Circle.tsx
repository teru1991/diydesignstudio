import React, { useState } from 'react';
import ParameterInput from '../../../common/ParameterInput';
import ColorPicker from "../../../common/ColorPicker";
import LineWidthSelector from "../../../common/LineWidthSelector";
import useShapeAPIHandler from "../../../hooks/useShapeAPIHandler";

const CircleComponent: React.FC = () => {
    const [color, setColor] = useState("#000000");
    const [lineWidth, setLineWidth] = useState(1);

    const [center, setCenter] = useState("");
    const [radius, setRadius] = useState("");

    const isValid = () => center !== "" && radius !== "";

    const { sendData, loading, error } = useShapeAPIHandler(
        { center, radius },
        color,
        lineWidth,
        isValid
    );

    return (
        <div>
            <ParameterInput label="中心点" value={center} onChange={setCenter} />
            <ParameterInput label="半径" value={radius} onChange={setRadius} />
            <ColorPicker value={color} onChange={setColor} />
            <LineWidthSelector value={lineWidth} onChange={setLineWidth} />

            <button onClick={sendData}>図形を作成</button>
            {loading && <p>データ送信中...</p>}
            {error && <p>エラー: {error}</p>}
        </div>
    );
};


export default CircleComponent;
