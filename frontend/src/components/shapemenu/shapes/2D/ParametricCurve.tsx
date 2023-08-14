import React, { useState, useEffect } from 'react';
import ParameterInput from '../../../common/ParameterInput';
import ColorPicker from "../../../common/ColorPicker";
import LineWidthSelector from "../../../common/LineWidthSelector";
import useShapeAPIHandler from "../../../hooks/useShapeAPIHandler";

const ParametricCurveComponent: React.FC = () => {
    const [color, setColor] = useState("#000000");  // Default black color
    const [lineWidth, setLineWidth] = useState(1);  // Default line width
    

    // Additional state for ParametricCurve parameters
    const [param1, setParam1] = useState("");
    const [param2, setParam2] = useState("");

    // 1. Add useState definitions
    const [isSent, setIsSent] = useState(false);
    const [responseData, setResponseData] = useState(null);

    // 2. Add the validation function for ParametricCurve parameters
    const validateParametricCurveParams = (params: { param1: string; param2: string }) => {
        return params.param1 !== "" && params.param2 !== "";
    };

    // 3. Use the custom hook
    const { sendData, loading, error } = useShapeAPIHandler(
        { param1, param2 },
        color,
        lineWidth,
        validateParametricCurveParams
    );

    return (
        <div>
            <label>方程式 (x(t), y(t)):</label>
            <input type="text" placeholder="x(t)"/>
            <input type="text" placeholder="y(t)"/>
            <label>パラメータ範囲 (最小, 最大):</label>
            <input type="number" placeholder="最小"/>
            <input type="number" placeholder="最大"/>
            <ColorPicker value={color} onChange={setColor} />
            <LineWidthSelector value={lineWidth} onChange={setLineWidth} />
        
                <button onClick={sendData}>図形を作成</button>
                {loading && <p>データ送信中...</p>}
                {error && <p>エラー: {error}</p>}
                {responseData && <p>バックエンドからの応答: {JSON.stringify(responseData)}</p>}
    </div>
    );
};

export default ParametricCurveComponent;
