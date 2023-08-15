// BezierCurveComponent.tsx
import React, { useState, useEffect } from 'react';
import ParameterInput from '../../../common/ParameterInput';
import ColorPicker from "../../../common/ColorPicker";
import LineWidthSelector from "../../../common/LineWidthSelector";
import useShapeAPIHandler from "../../../hooks/useShapeAPIHandler";

const BezierCurveComponent: React.FC = () => {
    const [curveColor, setCurveColor] = useState("#000000");
    const [curveWidth, setCurveWidth] = useState(1);
    const [curveDegree, setCurveDegree] = useState(3);

    const [apiIsSent, setApiIsSent] = useState(false);
    const [apiResponseData, setApiResponseData] = useState(null);

    const [controlPointValues, setControlPointValues] = useState<Array<string>>(Array(curveDegree + 1).fill(""));

    const controlInputs = controlPointValues.map((value, i) => (
        <ParameterInput
            key={i}
            label={`制御点${i}`}
            value={value}
            onChange={(newVal) => {
                const updatedControlPoints = [...controlPointValues];
                updatedControlPoints[i] = newVal;
                setControlPointValues(updatedControlPoints);
            }}
        />
    ));

    const validateControlPoints = (params: { controlPoints: Array<string> }) => {
        return params.controlPoints.every(point => point !== "");
    };

    const { sendData, loading, error } = useShapeAPIHandler(
        { controlPoints: controlPointValues },
        curveColor,
        curveWidth,
        validateControlPoints
    );

    return (
        <div>
            <ParameterInput
                label="次数"
                value={curveDegree.toString()}
                onChange={(val) => setCurveDegree(Number(val))}
            />
            {controlInputs}
            <ColorPicker value={curveColor} onChange={setCurveColor} />
            <LineWidthSelector value={curveWidth} onChange={setCurveWidth} />

            <button onClick={sendData}>図形を作成</button>
            {loading && <p>データ送信中...</p>}
            {error && <p>エラー: {error}</p>}
            {apiResponseData && <p>バックエンドからの応答: {JSON.stringify(apiResponseData)}</p>}
        </div>
    );
};

export default BezierCurveComponent;
