import React, { useState, useEffect } from 'react';
import ParameterInput from '../../../common/ParameterInput';
import ColorPicker from "../../../common/ColorPicker";
import LineWidthSelector from "../../../common/LineWidthSelector";
import useShapeAPIHandler from "../../../hooks/useShapeAPIHandler";


const TetrahedronComponent: React.FC = () => {
    const [color, setColor] = useState("#000000");  // Default black color
    const [lineWidth, setLineWidth] = useState(1);  // Default line width
    return (
        <div>
            <ParameterInput label="底辺の三角形の底辺" value="" onChange={() => {
            }}/>
            <ParameterInput label="底辺の三角形の高さ" value="" onChange={() => {
            }}/>
            <ParameterInput label="四面体の高さ" value="" onChange={() => {
            }}/>
            <ColorPicker value={color} onChange={setColor} />
            <LineWidthSelector value={lineWidth} onChange={setLineWidth} />
        </div>
    );
};

export default TetrahedronComponent;
