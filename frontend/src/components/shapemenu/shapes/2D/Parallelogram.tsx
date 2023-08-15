import React, { useState } from 'react';
import ParameterInput from '../../../common/ParameterInput';
import ColorPicker from "../../../common/ColorPicker";
import LineWidthSelector from "../../../common/LineWidthSelector";
import useShapeAPIHandler from "../../../hooks/useShapeAPIHandler";

const ParallelogramComponent: React.FC = () => {
    const [color, setColor] = useState("#000000");
    const [lineWidth, setLineWidth] = useState(1);

    const [vertex, setVertex] = useState("");
    const [sideLength, setSideLength] = useState("");
    const [angle, setAngle] = useState("");

    const isValid = () => vertex !== "" && sideLength !== "" && angle !== "";

    const { sendData, loading, error } = useShapeAPIHandler(
        { vertex, sideLength, angle },
        color,
        lineWidth,
        isValid
    );

    return (
        <div>
            <ParameterInput label="頂点" value={vertex} onChange={setVertex} />
            <ParameterInput label="辺の長さ" value={sideLength} onChange={setSideLength} />
            <ParameterInput label="角度" value={angle} onChange={setAngle} />
            <ColorPicker value={color} onChange={setColor} />
            <LineWidthSelector value={lineWidth} onChange={setLineWidth} />

            <button onClick={sendData}>図形を作成</button>
            {loading && <p>データ送信中...</p>}
            {error && <p>エラー: {error}</p>}
        </div>
    );
};


export default ParallelogramComponent;
