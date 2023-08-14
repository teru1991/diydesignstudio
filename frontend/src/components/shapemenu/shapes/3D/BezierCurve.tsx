import React, { useState, useEffect } from 'react';
import ParameterInput from '../../../common/ParameterInput';
import ColorPicker from "../../../common/ColorPicker";
import LineWidthSelector from "../../../common/LineWidthSelector";
import useShapeAPIHandler from "../../../hooks/useShapeAPIHandler";

const BezierCurveComponent: React.FC = () => {
    const [color, setColor] = useState("#000000");  // Default black color
    const [lineWidth, setLineWidth] = useState(1);  // Default line width
    const [degree, setDegree] = useState(3); // 次数のデフォルト値
    

    // 1. Add useState definitions
    const [isSent, setIsSent] = useState(false);
    const [responseData, setResponseData] = useState(null);


    const controlPoints = Array.from({length: degree + 1}, (_, i) => (
        <input key={i} type="text" placeholder={`制御点${i}`}/>
    ));

    

    // Additional state for BezierCurve parameters
    const [param1, setParam1] = useState("");
    const [param2, setParam2] = useState("");

    // 2. Add the validation function for BezierCurve parameters
    const validateBezierCurveParams = (params: { param1: string; param2: string }) => {
        return params.param1 !== "" && params.param2 !== "";
    };

    // 3. Use the custom hook
    const { sendData, loading, error } = useShapeAPIHandler(
        { param1, param2 },
        color,
        lineWidth,
        validateBezierCurveParams
    );

    return (
        <div>
            <label>次数:</label>
            <input type="number" value={degree} onChange={(e) => setDegree(Number(e.target.value))}/>
            {controlPoints}
            <ColorPicker value={color} onChange={setColor} />
            <LineWidthSelector value={lineWidth} onChange={setLineWidth} />
        
            <button onClick={sendData}>図形を作成</button>
            {loading && <p>データ送信中...</p>}
            {error && <p>エラー: {error}</p>}
            {responseData && <p>バックエンドからの応答: {JSON.stringify(responseData)}</p>}

                <button onClick={sendData}>図形を作成</button>
                {loading && <p>データ送信中...</p>}
                {error && <p>エラー: {error}</p>}
                {responseData && <p>バックエンドからの応答: {JSON.stringify(responseData)}</p>}
    </div>
    );
};

export default BezierCurveComponent;
