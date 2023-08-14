import React, { useState, useEffect } from 'react';
import ParameterInput from '../../../common/ParameterInput';
import ColorPicker from "../../../common/ColorPicker";
import LineWidthSelector from "../../../common/LineWidthSelector";
import useShapeAPIHandler from "../../../hooks/useShapeAPIHandler";

const DelaunayTriangulationComponent: React.FC = () => {
    const [color, setColor] = useState("#000000");  // Default black color
    const [lineWidth, setLineWidth] = useState(1);  // Default line width
    return (
        <div>
            <label>頂点集合:</label>
            <input type="text" placeholder="頂点1"/>
            <input type="text" placeholder="頂点2"/>
            {/* 他の頂点も追加可能 */}
            <ColorPicker value={color} onChange={setColor} />
            <LineWidthSelector value={lineWidth} onChange={setLineWidth} />
        </div>
    );
};

export default DelaunayTriangulationComponent;
