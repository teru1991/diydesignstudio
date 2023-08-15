import React, { useState } from 'react';
import ParameterInput from '../../../common/ParameterInput';
import ColorPicker from "../../../common/ColorPicker";
import LineWidthSelector from "../../../common/LineWidthSelector";
import useShapeAPIHandler from "../../../hooks/useShapeAPIHandler";

const ArcComponent: React.FC = () => {
    const [arcColor, setArcColor] = useState("#000000");
    const [arcLineWidth, setArcLineWidth] = useState(1);

    const [centerPoint, setCenterPoint] = useState("");
    const [radius, setRadius] = useState("");
    const [startAngle, setStartAngle] = useState("");
    const [endAngle, setEndAngle] = useState("");

    const [apiIsSent, setApiIsSent] = useState(false);
    const [apiResponseData, setApiResponseData] = useState(null);

    const validateArcParams = (params: { centerPoint: string; radius: string; startAngle: string; endAngle: string }) => {
        return params.centerPoint !== "" && params.radius !== "" && params.startAngle !== "" && params.endAngle !== "";
    };

    const { sendData, loading, error } = useShapeAPIHandler(
        { centerPoint, radius, startAngle, endAngle },
        arcColor,
        arcLineWidth,
        validateArcParams
    );

    return (
        <div>
            <ParameterInput label="中心点" value={centerPoint} onChange={setCenterPoint} />
            <ParameterInput label="半径" value={radius} onChange={setRadius} />
            <ParameterInput label="始点角度" value={startAngle} onChange={setStartAngle} />
            <ParameterInput label="終点角度" value={endAngle} onChange={setEndAngle} />
            <ColorPicker value={arcColor} onChange={setArcColor} />
            <LineWidthSelector value={arcLineWidth} onChange={setArcLineWidth} />

            <button onClick={sendData}>図形を作成</button>
            {loading && <p>データ送信中...</p>}
            {error && <p>エラー: {error}</p>}
            {apiResponseData && <p>バックエンドからの応答: {JSON.stringify(apiResponseData)}</p>}
        </div>
    );
};

export default ArcComponent;
