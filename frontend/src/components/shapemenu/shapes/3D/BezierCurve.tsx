import React, { useState, useEffect } from 'react';
import ParameterInput from '../../../common/ParameterInput';
import ColorPicker from "../../../common/ColorPicker";
import LineWidthSelector from "../../../common/LineWidthSelector";
import useShapeAPIHandler from "../../../hooks/useShapeAPIHandler";

const BezierCurveComponent: React.FC = () => {
    const [color, setColor] = useState("#000000");  // Default black color
    const [lineWidth, setLineWidth] = useState(1);  // Default line width
    const [degree, setDegree] = useState(3); // 次数のデフォルト値
    const controlPoints = Array.from({length: degree + 1}, (_, i) => (
        <input key={i} type="text" placeholder={`制御点${i}`}/>
    ));

    return (
        <div>
            <label>次数:</label>
            <input type="number" value={degree} onChange={(e) => setDegree(Number(e.target.value))}/>
            {controlPoints}
            <ColorPicker value={color} onChange={setColor} />
            <LineWidthSelector value={lineWidth} onChange={setLineWidth} />
        </div>
    );
};

export default BezierCurveComponent;
