import React, { useState } from 'react';
import ParameterInput from '../../../common/ParameterInput';
import ColorPicker from "../../../common/ColorPicker";
import LineWidthSelector from "../../../common/LineWidthSelector";
import useShapeAPIHandler from "../../../hooks/useShapeAPIHandler";

const SphereComponent: React.FC = () => {
    const [color, setColor] = useState("#000000");
    const [lineWidth, setLineWidth] = useState(1);

    // Sphere parameters state
    const [centerPoint, setCenterPoint] = useState("");
    const [radius, setRadius] = useState("");

    const validateSphereParams = (params: { centerPoint: string; radius: string }) => {
        return params.centerPoint !== "" && params.radius !== "";
    };

    const { sendData, loading, error, responseData } = useShapeAPIHandler(
        { centerPoint, radius },
        color,
        lineWidth,
        validateSphereParams
    );

    return (
        <div>
            <ParameterInput label="中心点" value={centerPoint} onChange={setCenterPoint} />
            <ParameterInput label="半径" value={radius} onChange={setRadius} />
            <ColorPicker value={color} onChange={setColor} />
            <LineWidthSelector value={lineWidth} onChange={setLineWidth} />

            <button onClick={sendData}>図形を作成</button>
            {loading && <p>データ送信中...</p>}
            {error && <p>エラー: {error}</p>}
            {responseData && <p>バックエンドからの応答: {JSON.stringify(responseData)}</p>}
        </div>
    );
};

export default SphereComponent;
