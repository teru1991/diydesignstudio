import React, { useState } from 'react';
import ColorPicker from "../../../common/ColorPicker";
import LineWidthSelector from "../../../common/LineWidthSelector";
import useShapeAPIHandler from "../../../hooks/useShapeAPIHandler";

const MetaballComponent: React.FC = () => {
    const [color, setColor] = useState("#000000");
    const [lineWidth, setLineWidth] = useState(1);

    // State for Metaball parameters
    const [center, setCenter] = useState("");
    const [radius, setRadius] = useState(0);
    const [intensity, setIntensity] = useState(0);

    const [apiIsSent, setApiIsSent] = useState(false);
    const [apiResponseData, setApiResponseData] = useState(null);

    const validateMetaballParams = () => {
        return center !== "" && radius > 0 && intensity > 0;
    };

    const { sendData, loading, error } = useShapeAPIHandler(
        { center, radius, intensity },
        color,
        lineWidth,
        validateMetaballParams
    );

    return (
        <div>
            <label>中心点:</label>
            <input type="text" value={center} onChange={e => setCenter(e.target.value)}/>
            <label>半径:</label>
            <input type="number" value={radius} onChange={e => setRadius(Number(e.target.value))}/>
            <label>強度:</label>
            <input type="number" value={intensity} onChange={e => setIntensity(Number(e.target.value))}/>
            <ColorPicker value={color} onChange={setColor} />
            <LineWidthSelector value={lineWidth} onChange={setLineWidth} />

            <button onClick={sendData}>図形を作成</button>
            {loading && <p>データ送信中...</p>}
            {error && <p>エラー: {error}</p>}
            {apiResponseData && <p>バックエンドからの応答: {JSON.stringify(apiResponseData)}</p>}
        </div>
    );
};

export default MetaballComponent;
