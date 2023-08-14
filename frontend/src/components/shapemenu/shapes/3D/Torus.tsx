import React, { useState } from 'react';
import ParameterInput from '../../../common/ParameterInput';
import ColorPicker from "../../../common/ColorPicker";
import LineWidthSelector from "../../../common/LineWidthSelector";
import useShapeAPIHandler from "../../../hooks/useShapeAPIHandler";

const TorusComponent: React.FC = () => {
    const [color, setColor] = useState("#000000");  // Default black color
    const [lineWidth, setLineWidth] = useState(1);  // Default line width
    return (
        <div>
            <h3>Torus Parameters</h3>
            <ParameterInput label="メジャーラジウス" value="" onChange={() => {}}/>
            <ParameterInput label="マイナーラジウス" value="" onChange={() => {}}/>
            <ParameterInput label="セクションの数" value="" onChange={() => {}}/>
            <ParameterInput label="回転角度 (degree)" value="" onChange={() => {}}/>
            <ColorPicker value={color} onChange={setColor} />
            <LineWidthSelector value={lineWidth} onChange={setLineWidth} />
        </div>
    );
};


export default TorusComponent;
