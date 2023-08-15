import React, { useState } from 'react';
import ParameterInput from '../../../common/ParameterInput';
import ColorPicker from "../../../common/ColorPicker";
import LineWidthSelector from "../../../common/LineWidthSelector";
import useShapeAPIHandler from "../../../hooks/useShapeAPIHandler";

const SubdivisionSurfaceComponent: React.FC = () => {
    const [color, setColor] = useState("#000000");
    const [lineWidth, setLineWidth] = useState(1);

    // SubdivisionSurface parameters state
    const [controlMesh, setControlMesh] = useState("");
    const [subdivisionLevel, setSubdivisionLevel] = useState("");

    const validateSubdivisionSurfaceParams = (params: { controlMesh: string; subdivisionLevel: string }) => {
        return params.controlMesh !== "" && params.subdivisionLevel !== "";
    };

    const { sendData, loading, error, responseData } = useShapeAPIHandler(
        { controlMesh, subdivisionLevel },
        color,
        lineWidth,
        validateSubdivisionSurfaceParams
    );

    return (
        <div>
            <ParameterInput label="制御メッシュ" value={controlMesh} onChange={setControlMesh} />
            <ParameterInput label="細分化レベル" value={subdivisionLevel} onChange={setSubdivisionLevel} />
            <ColorPicker value={color} onChange={setColor} />
            <LineWidthSelector value={lineWidth} onChange={setLineWidth} />

            <button onClick={sendData}>図形を作成</button>
            {loading && <p>データ送信中...</p>}
            {error && <p>エラー: {error}</p>}
            {responseData && <p>バックエンドからの応答: {JSON.stringify(responseData)}</p>}
        </div>
    );
};

export default SubdivisionSurfaceComponent;
