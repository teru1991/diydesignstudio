import React, { useState, useEffect } from 'react';
import ParameterInput from '../../../common/ParameterInput';
import ColorPicker from "../../../common/ColorPicker";
import LineWidthSelector from "../../../common/LineWidthSelector";
import useShapeAPIHandler from "../../../hooks/useShapeAPIHandler";

const CompositeSurfaceComponent: React.FC = () => {
    const [color, setColor] = useState("#000000");  // Default black color
    const [lineWidth, setLineWidth] = useState(1);  // Default line width
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
        </div>
    );
};

export default CompositeSurfaceComponent;
