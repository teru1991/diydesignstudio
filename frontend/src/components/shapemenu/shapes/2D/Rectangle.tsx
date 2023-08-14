import React, { useState } from 'react';
import ColorPicker from "../../../common/ColorPicker";
import LineWidthSelector from "../../../common/LineWidthSelector";
import useShapeAPIHandler from "../../../hooks/useShapeAPIHandler";

const RectangleComponent: React.FC = () => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [color, setColor] = useState("#000000");
    const [lineWidth, setLineWidth] = useState(1);

    const validateRectangleParams = (params: { width: number; height: number }) => {
        return params.width > 0 && params.height > 0;
    };


    const { isAllDataFilled, sendData, loading, error, responseData } = useShapeAPIHandler(
        { width, height },
        color,
        lineWidth,
        validateRectangleParams
    );

    return (
        <div>
            <input type="number" value={width} onChange={(e) => setWidth(Number(e.target.value))} placeholder="Width" />
            <input type="number" value={height} onChange={(e) => setHeight(Number(e.target.value))} placeholder="Height" />
            <ColorPicker value={color} onChange={setColor} />
            <LineWidthSelector value={lineWidth} onChange={setLineWidth} />
            {/* Optionally, you can also provide a button for manual sending if necessary */}
            {!isAllDataFilled && <button onClick={sendData}>図形作成</button>}
            {loading && <p>データ送信中...</p>}
            {error && <p>エラー: {error}</p>}
            {responseData && <p>バックエンドからの応答: {JSON.stringify(responseData)}</p>}
        </div>
    );
};

export default RectangleComponent;