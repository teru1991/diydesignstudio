import React, { useState } from 'react';
import ParameterInput from '../../../common/ParameterInput';
import ColorPicker from "../../../common/ColorPicker";
import LineWidthSelector from "../../../common/LineWidthSelector";
import useShapeAPIHandler from "../../../hooks/useShapeAPIHandler";

const RegularPolygonComponent: React.FC = () => {
  const [sides, setSides] = useState(3); // 初期値は三角形
    const [color, setColor] = useState("#000000");  // Default black color
    const [lineWidth, setLineWidth] = useState(1);  // Default line width
  const handleSidesChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSides(Number(event.target.value));
  };

  return (
    <div>
      <label>
        辺の数:
        <select value={sides} onChange={handleSidesChange}>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          {/* 他の辺の数のオプション */}
        </select>
      </label>
      <ParameterInput label="頂点" value="" onChange={() => {}} />
      <ParameterInput label="辺の長さ" value="" onChange={() => {}} />
        <ColorPicker value={color} onChange={setColor} />
        <LineWidthSelector value={lineWidth} onChange={setLineWidth} />
    </div>
  );
};

export default RegularPolygonComponent;
