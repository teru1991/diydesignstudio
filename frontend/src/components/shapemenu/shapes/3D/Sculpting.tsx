import React, { useState } from 'react';
import ParameterInput from '../../../common/ParameterInput';
import ColorPicker from "../../../common/ColorPicker";
import LineWidthSelector from "../../../common/LineWidthSelector";
import useShapeAPIHandler from "../../../hooks/useShapeAPIHandler";

const SculptingComponent: React.FC = () => {
    const [color, setColor] = useState("#000000");  // Default black color
    const [lineWidth, setLineWidth] = useState(1);  // Default line width

    const [meshData, setMeshData] = useState("");
    const [brushParameter, setBrushParameter] = useState("");

    const validateSculptingParams = (params: { meshData: string; brushParameter: string }) => {
        return params.meshData !== "" && params.brushParameter !== "";
    };

    const { sendData, loading, error, responseData } = useShapeAPIHandler(
        { meshData, brushParameter },
        color,
        lineWidth,
        validateSculptingParams
    );

    return (
        <div>
            <ParameterInput label="メッシュ" value={meshData} onChange={setMeshData} />
            <ParameterInput label="ブラシパラメータ" value={brushParameter} onChange={setBrushParameter} />
            <ColorPicker value={color} onChange={setColor} />
            <LineWidthSelector value={lineWidth} onChange={setLineWidth} />

            <button onClick={sendData}>図形を作成</button>
            {loading && <p>データ送信中...</p>}
            {error && <p>エラー: {error}</p>}
            {responseData && <p>バックエンドからの応答: {JSON.stringify(responseData)}</p>}
        </div>
    );
};

export default SculptingComponent;
