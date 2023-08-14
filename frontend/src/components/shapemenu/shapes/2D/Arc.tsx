import React, { useState } from 'react';
import ParameterInput from '../../../common/ParameterInput';
import ColorPicker from "../../../common/ColorPicker";
import LineWidthSelector from "../../../common/LineWidthSelector";
import useShapeAPIHandler from "../../../hooks/useShapeAPIHandler";
const ArcComponent: React.FC = () => {
    const [color, setColor] = useState("#000000");  // Default black color
    const [lineWidth, setLineWidth] = useState(1);  // Default line width
  return (
    <div>
      <ParameterInput label="中心点" value="" onChange={() => {}} />
      <ParameterInput label="半径" value="" onChange={() => {}} />
      <ParameterInput label="始点角度" value="" onChange={() => {}} />
      <ParameterInput label="終点角度" value="" onChange={() => {}} />
      <ColorPicker value={color} onChange={setColor} />
      <LineWidthSelector value={lineWidth} onChange={setLineWidth} />
    </div>
  );
};

export default ArcComponent;
