import React, { useState } from 'react';
import ParameterInput from '../../../common/ParameterInput';
import ColorPicker from "../../../common/ColorPicker";
import LineWidthSelector from "../../../common/LineWidthSelector";
import useShapeAPIHandler from "../../../hooks/useShapeAPIHandler";

const PentahedronComponent: React.FC = () => {
    const [color, setColor] = useState("#000000");  // Default black color
    const [lineWidth, setLineWidth] = useState(1);  // Default line width
    return (
        <div>
            <h3>Pentahedron Parameters</h3>
            <ParameterInput label="Vertex 1 (x,y,z)" value="" onChange={() => {}}/>
            <ParameterInput label="Vertex 2 (x,y,z)" value="" onChange={() => {}}/>
            <ParameterInput label="Vertex 3 (x,y,z)" value="" onChange={() => {}}/>
            <ParameterInput label="Vertex 4 (x,y,z)" value="" onChange={() => {}}/>
            <ParameterInput label="Vertex 5 (x,y,z)" value="" onChange={() => {}}/>
            <ColorPicker value={color} onChange={setColor} />
            <LineWidthSelector value={lineWidth} onChange={setLineWidth} />
        </div>
    );
};


export default PentahedronComponent;
