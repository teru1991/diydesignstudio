import React, { useState } from 'react';
import ParameterInput from '../../../common/ParameterInput';
import ColorPicker from "../../../common/ColorPicker";
import LineWidthSelector from "../../../common/LineWidthSelector";
import useShapeAPIHandler from "../../../hooks/useShapeAPIHandler";

const ConeComponent: React.FC = () => {
    const [coneColor, setConeColor] = useState("#000000");
    const [coneLineWidth, setConeLineWidth] = useState(1);

    // Additional state for Cone parameters
    const [baseCenter, setBaseCenter] = useState("");
    const [radius, setRadius] = useState("");
    const [coneHeight, setConeHeight] = useState("");

    const [apiIsSent, setApiIsSent] = useState(false);
    const [apiResponseData, setApiResponseData] = useState(null);

    const validateConeParams = (params: { baseCenter: string; radius: string; coneHeight: string }) => {
        return params.baseCenter !== "" && params.radius !== "" && params.coneHeight !== "";
    };

    const { sendData, loading, error } = useShapeAPIHandler(
        { baseCenter, radius, coneHeight },
        coneColor,
        coneLineWidth,
        validateConeParams
    );

    return (
        <div>
            <ParameterInput
                label="底面の中心"
                value={baseCenter}
                onChange={(value: string) => setBaseCenter(value)}
            />
            <ParameterInput
                label="半径"
                value={radius}
                onChange={(value: string) => setRadius(value)}
            />
            <ParameterInput
                label="高さ"
                value={coneHeight}
                onChange={(value: string) => setConeHeight(value)}
            />
            <ColorPicker value={coneColor} onChange={setConeColor} />
            <LineWidthSelector value={coneLineWidth} onChange={setConeLineWidth} />

            <button onClick={sendData}>図形を作成</button>
            {loading && <p>データ送信中...</p>}
            {error && <p>エラー: {error}</p>}
            {apiResponseData && <p>バックエンドからの応答: {JSON.stringify(apiResponseData)}</p>}
        </div>
    );
};

export default ConeComponent;
