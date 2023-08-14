import React, { useState, useEffect } from 'react';
import ParameterInput from '../../../common/ParameterInput';
import ColorPicker from "../../../common/ColorPicker";
import LineWidthSelector from "../../../common/LineWidthSelector";
import useShapeAPIHandler from "../../../hooks/useShapeAPIHandler";

const
    OffsetCurveComponent: React.FC = () => {
        const [color, setColor] = useState("#000000");  // Default black color
        const [lineWidth, setLineWidth] = useState(1);  // Default line width
        return (
            <div>
                <label>元の曲線:</label>
                <input type="text"/>
                <label>距離:</label>
                <input type="number"/>
                <ColorPicker value={color} onChange={setColor} />
                <LineWidthSelector value={lineWidth} onChange={setLineWidth} />
            </div>
        );
    };

export default OffsetCurveComponent;
