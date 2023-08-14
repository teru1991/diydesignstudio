import React, { useState, useEffect } from 'react';
import ParameterInput from '../../../common/ParameterInput';
import ColorPicker from "../../../common/ColorPicker";
import LineWidthSelector from "../../../common/LineWidthSelector";
import useShapeAPIHandler from "../../../hooks/useShapeAPIHandler";

const ParametricSurfaceComponent: React.FC = () => {
    const [color, setColor] = useState("#000000");  // Default black color
    const [lineWidth, setLineWidth] = useState(1);  // Default line width
    return (
        <div>
            <label>方程式:</label>
            <input type="text" placeholder="x(u,v)"/>
            <input type="text" placeholder="y(u,v)"/>
            <input type="text" placeholder="z(u,v)"/>
            <label>パラメータ範囲:</label>
            <input type="text" placeholder="uの範囲"/>
            <input type="text" placeholder="vの範囲"/>
            <ColorPicker value={color} onChange={setColor} />
            <LineWidthSelector value={lineWidth} onChange={setLineWidth} />
        </div>
    );
};

export default ParametricSurfaceComponent;
