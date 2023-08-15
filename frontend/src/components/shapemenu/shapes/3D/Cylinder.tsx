import React, { useState } from 'react';
import ParameterInput from '../../../common/ParameterInput';
import ColorPicker from "../../../common/ColorPicker";
import LineWidthSelector from "../../../common/LineWidthSelector";
import useShapeAPIHandler from "../../../hooks/useShapeAPIHandler";

const CylinderComponent: React.FC = () => {
    const [cylinderColor, setCylinderColor] = useState("#000000");
    const [cylinderLineWidth, setCylinderLineWidth] = useState(1);

    // Additional state for Cylinder parameters
    const [baseCenter, setBaseCenter] = useState("");
    const [radius, setRadius] = useState("");
    const [height, setHeight] = useState("");

    const [apiIsSent, setApiIsSent] = useState(false);
    const [apiResponseData, setApiResponseData] = useState(null);

    const validateCylinderParams = (params: { baseCenter: string; radius: string; height: string }) => {
        return params.baseCenter !== "" && params.radius !== "" && params.height !== "";
    };

    const { sendData, loading, error } = useShapeAPIHandler(
        { baseCenter, radius, height },
        cylinderColor,
        cylinderLineWidth,
        validateCylinderParams
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
                value={height}
                onChange={(value: string) => setHeight(value)}
            />
            <ColorPicker value={cylinderColor} onChange={setCylinderColor} />
            <LineWidthSelector value={cylinderLineWidth} onChange={setCylinderLineWidth} />

            <button onClick={sendData}>図形を作成</button>
            {loading && <p>データ送信中...</p>}
            {error && <p>エラー: {error}</p>}
            {apiResponseData && <p>バックエンドからの応答: {JSON.stringify(apiResponseData)}</p>}
        </div>
    );
};

export default CylinderComponent;
