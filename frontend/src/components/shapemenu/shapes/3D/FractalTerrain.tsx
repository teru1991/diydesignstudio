import React, { useState } from 'react';
import ParameterInput from '../../../common/ParameterInput';
import ColorPicker from "../../../common/ColorPicker";
import LineWidthSelector from "../../../common/LineWidthSelector";
import useShapeAPIHandler from "../../../hooks/useShapeAPIHandler";

const FractalTerrainComponent: React.FC = () => {
    const [color, setColor] = useState("#000000");
    const [lineWidth, setLineWidth] = useState(1);

    // State for FractalTerrain parameters
    const [iterations, setIterations] = useState(0);
    const [scale, setScale] = useState(1);
    const [roughness, setRoughness] = useState(1);

    const [apiIsSent, setApiIsSent] = useState(false);
    const [apiResponseData, setApiResponseData] = useState(null);

    const validateFractalTerrainParams = (params: { iterations: number; scale: number; roughness: number }) => {
        return params.iterations > 0 && params.scale > 0 && params.roughness > 0;
    };

    const { sendData, loading, error } = useShapeAPIHandler(
        { iterations, scale, roughness },
        color,
        lineWidth,
        validateFractalTerrainParams
    );

    return (
        <div>
            <ParameterInput
                label="イテレーション数"
                value={iterations.toString()}
                onChange={(value: string) => setIterations(Number(value))}
            />
            <ParameterInput
                label="スケール"
                value={scale.toString()}
                onChange={(value: string) => setScale(Number(value))}
            />
            <ParameterInput
                label="細かさ"
                value={roughness.toString()}
                onChange={(value: string) => setRoughness(Number(value))}
            />
            <ColorPicker value={color} onChange={setColor} />
            <LineWidthSelector value={lineWidth} onChange={setLineWidth} />

            <button onClick={sendData}>図形を作成</button>
            {loading && <p>データ送信中...</p>}
            {error && <p>エラー: {error}</p>}
            {apiResponseData && <p>バックエンドからの応答: {JSON.stringify(apiResponseData)}</p>}
        </div>
    );
};

export default FractalTerrainComponent;
