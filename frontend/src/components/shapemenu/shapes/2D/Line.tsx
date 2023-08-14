import React, { useState } from 'react';
import ParameterInput from '../../../common/ParameterInput';
import ColorPicker from "../../../common/ColorPicker";
import LineWidthSelector from "../../../common/LineWidthSelector";
import useShapeAPIHandler from "../../../hooks/useShapeAPIHandler";

const LineComponent: React.FC = () => {
    const [color, setColor] = useState("#000000");  // Default black color
    const [lineWidth, setLineWidth] = useState(1);  // Default line width
  return (
    <div>
      <ParameterInput label="始点" value="" onChange={() => {}} />
      <ParameterInput label="終点" value="" onChange={() => {}} />
        <ColorPicker value={color} onChange={setColor} />
        <LineWidthSelector value={lineWidth} onChange={setLineWidth} />
    </div>
  );
};

export default LineComponent;
