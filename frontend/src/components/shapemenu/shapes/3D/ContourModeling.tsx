import React, { useState } from 'react';
import ParameterInput from '../../../common/ParameterInput';
import ColorPicker from "../../../common/ColorPicker";
import LineWidthSelector from "../../../common/LineWidthSelector";
import useShapeAPIHandler from "../../../hooks/useShapeAPIHandler";

const ContourModelingComponent: React.FC = () => {
    const [contourColor, setContourColor] = useState("#000000");
    const [contourLineWidth, setContourLineWidth] = useState(1);

    // Additional state for ContourModeling parameters
    const [scalarField, setScalarField] = useState("");
    const [threshold, setThreshold] = useState(0);

    const [apiIsSent, setApiIsSent] = useState(false);
    const [apiResponseData, setApiResponseData] = useState(null);

    const validateContourModelingParams = (params: { scalarField: string; threshold: number }) => {
        return params.scalarField !== "" && params.threshold > 0;
    };

    const { sendData, loading, error } = useShapeAPIHandler(
        { scalarField, threshold },
        contourColor,
        contourLineWidth,
        validateContourModelingParams
    );

    return (
        <div>
            <ParameterInput
                label="スカラー場"
                value={scalarField}
                onChange={(value: string) => setScalarField(value)}
            />
            <ParameterInput
                label="閾値"
                value={threshold.toString()}
                onChange={(value: string) => setThreshold(Number(value))}
            />
            <ColorPicker value={contourColor} onChange={setContourColor} />
            <LineWidthSelector value={contourLineWidth} onChange={setContourLineWidth} />

            <button onClick={sendData}>図形を作成</button>
            {loading && <p>データ送信中...</p>}
            {error && <p>エラー: {error}</p>}
            {apiResponseData && <p>バックエンドからの応答: {JSON.stringify(apiResponseData)}</p>}
        </div>
    );
};

export default ContourModelingComponent;
