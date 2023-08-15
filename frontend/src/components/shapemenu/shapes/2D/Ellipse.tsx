import React, { useState } from 'react';
import ParameterInput from '../../../common/ParameterInput';
import ColorPicker from "../../../common/ColorPicker";
import LineWidthSelector from "../../../common/LineWidthSelector";
import useShapeAPIHandler from "../../../hooks/useShapeAPIHandler";

const EllipseComponent: React.FC = () => {
    const [color, setColor] = useState("#000000");
    const [lineWidth, setLineWidth] = useState(1);

    const [majorAxis, setMajorAxis] = useState("");
    const [minorAxis, setMinorAxis] = useState("");
    const [center, setCenter] = useState("");

    const isValid = () => majorAxis !== "" && minorAxis !== "" && center !== "";

    const { sendData, loading, error } = useShapeAPIHandler(
        { majorAxis, minorAxis, center },
        color,
        lineWidth,
        isValid
    );

    return (
        <div>
            <ParameterInput label="長軸" value={majorAxis} onChange={setMajorAxis} />
            <ParameterInput label="短軸" value={minorAxis} onChange={setMinorAxis} />
            <ParameterInput label="中心点" value={center} onChange={setCenter} />
            <ColorPicker value={color} onChange={setColor} />
            <LineWidthSelector value={lineWidth} onChange={setLineWidth} />

            <button onClick={sendData}>図形を作成</button>
            {loading && <p>データ送信中...</p>}
            {error && <p>エラー: {error}</p>}
        </div>
    );
};

export default EllipseComponent;
