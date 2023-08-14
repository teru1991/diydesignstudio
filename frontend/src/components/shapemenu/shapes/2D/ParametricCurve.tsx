import React, { useState, useEffect } from 'react';
import ParameterInput from '../../../common/ParameterInput';
import ColorPicker from "../../../common/ColorPicker";
import LineWidthSelector from "../../../common/LineWidthSelector";
import useShapeAPIHandler from "../../../hooks/useShapeAPIHandler";

const ParametricCurveComponent: React.FC = () => {
    const [color, setColor] = useState("#000000");  // Default black color
    const [lineWidth, setLineWidth] = useState(1);  // Default line width
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
        </div>
    );
};

export default ParametricCurveComponent;
