import React, { useState, useEffect } from 'react';
import ParameterInput from '../../../common/ParameterInput';
import ColorPicker from "../../../common/ColorPicker";
import LineWidthSelector from "../../../common/LineWidthSelector";
import useShapeAPIHandler from "../../../hooks/useShapeAPIHandler";

const ParametricCurveComponent: React.FC = () => {
    const [color, setColor] = useState("#000000");
    const [lineWidth, setLineWidth] = useState(1);

    const [equation, setEquation] = useState({ x: "", y: "" });
    const [parameterRange, setParameterRange] = useState({ min: "", max: "" });

    const isValid = () =>
        equation.x !== "" && equation.y !== "" && parameterRange.min !== "" && parameterRange.max !== "";

    const { sendData, loading, error } = useShapeAPIHandler(
        { equation, parameterRange },
        color,
        lineWidth,
        isValid
    );

    return (
        <div>
            <label>方程式 (x(t), y(t)):</label>
            <input type="text" value={equation.x} placeholder="x(t)" onChange={(e) => setEquation(prev => ({ ...prev, x: e.target.value }))} />
            <input type="text" value={equation.y} placeholder="y(t)" onChange={(e) => setEquation(prev => ({ ...prev, y: e.target.value }))} />

            <label>パラメータ範囲 (最小, 最大):</label>
            <input type="number" value={parameterRange.min} placeholder="最小" onChange={(e) => setParameterRange(prev => ({ ...prev, min: e.target.value }))} />
            <input type="number" value={parameterRange.max} placeholder="最大" onChange={(e) => setParameterRange(prev => ({ ...prev, max: e.target.value }))} />

            <ColorPicker value={color} onChange={setColor} />
            <LineWidthSelector value={lineWidth} onChange={setLineWidth} />

            <button onClick={sendData}>図形を作成</button>
            {loading && <p>データ送信中...</p>}
            {error && <p>エラー: {error}</p>}
        </div>
    );
};

export default ParametricCurveComponent;
