import React, { useState } from 'react';
import ColorPicker from "../../../common/ColorPicker";
import LineWidthSelector from "../../../common/LineWidthSelector";
import useShapeAPIHandler from "../../../hooks/useShapeAPIHandler";

const NURBSSurfaceComponent: React.FC = () => {
    const [color, setColor] = useState("#000000");
    const [lineWidth, setLineWidth] = useState(1);

    // State for NURBSSurface parameters
    const [controlPoints, setControlPoints] = useState("");
    const [weights, setWeights] = useState("");
    const [knotVector, setKnotVector] = useState("");

    const [apiIsSent, setApiIsSent] = useState(false);
    const [apiResponseData, setApiResponseData] = useState(null);

    const validateNURBSSurfaceParams = () => {
        return controlPoints !== "" && weights !== "" && knotVector !== "";
    };

    const { sendData, loading, error } = useShapeAPIHandler(
        { controlPoints, weights, knotVector },
        color,
        lineWidth,
        validateNURBSSurfaceParams
    );

    return (
        <div>
            <label>制御点:</label>
            <input type="text" value={controlPoints} onChange={e => setControlPoints(e.target.value)}/>
            <label>重み:</label>
            <input type="text" value={weights} onChange={e => setWeights(e.target.value)}/>
            <label>ノットベクトル:</label>
            <input type="text" value={knotVector} onChange={e => setKnotVector(e.target.value)}/>
            <ColorPicker value={color} onChange={setColor} />
            <LineWidthSelector value={lineWidth} onChange={setLineWidth} />

            <button onClick={sendData}>図形を作成</button>
            {loading && <p>データ送信中...</p>}
            {error && <p>エラー: {error}</p>}
            {apiResponseData && <p>バックエンドからの応答: {JSON.stringify(apiResponseData)}</p>}
        </div>
    );
};

export default NURBSSurfaceComponent;
