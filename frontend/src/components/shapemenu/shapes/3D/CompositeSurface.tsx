import React, { useState, useEffect } from 'react';
import ParameterInput from '../../../common/ParameterInput';
import ColorPicker from "../../../common/ColorPicker";
import LineWidthSelector from "../../../common/LineWidthSelector";
import useShapeAPIHandler from "../../../hooks/useShapeAPIHandler";

const CompositeSurfaceComponent: React.FC = () => {
    const [color, setColor] = useState("#000000");  // Default black color
    const [lineWidth, setLineWidth] = useState(1);  // Default line width
    

    // Additional state for CompositeSurface parameters
    const [param1, setParam1] = useState("");
    const [param2, setParam2] = useState("");

    // 1. Add useState definitions
    const [isSent, setIsSent] = useState(false);
    const [responseData, setResponseData] = useState(null);

    // 2. Add the validation function for CompositeSurface parameters
    const validateCompositeSurfaceParams = (params: { param1: string; param2: string }) => {
        return params.param1 !== "" && params.param2 !== "";
    };

    // 3. Use the custom hook
    const { sendData, loading, error } = useShapeAPIHandler(
        { param1, param2 },
        color,
        lineWidth,
        validateCompositeSurfaceParams
    );

    return (
        <div>
            <label>結合する曲面:</label>
            {/* 曲面の選択 */}
            <label>結合方法:</label>
            <select>
                <option value="union">結合</option>
                <option value="intersect">交差</option>
                {/* 他の結合方法 */}
            </select>
            <ColorPicker value={color} onChange={setColor} />
            <LineWidthSelector value={lineWidth} onChange={setLineWidth} />
        
                <button onClick={sendData}>図形を作成</button>
                {loading && <p>データ送信中...</p>}
                {error && <p>エラー: {error}</p>}
                {responseData && <p>バックエンドからの応答: {JSON.stringify(responseData)}</p>}
    </div>
    );
};

export default CompositeSurfaceComponent;
