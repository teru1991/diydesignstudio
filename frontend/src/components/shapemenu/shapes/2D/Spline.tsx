import React, { useState } from 'react';
import ParameterInput from '../../../common/ParameterInput';
import ColorPicker from "../../../common/ColorPicker";
import LineWidthSelector from "../../../common/LineWidthSelector";
import useShapeAPIHandler from "../../../hooks/useShapeAPIHandler";

const SplineComponent: React.FC = () => {
  const [controlPoints, setControlPoints] = useState<string[]>(['']);
  const [color, setColor] = useState("#000000");  // Default black color
  const [lineWidth, setLineWidth] = useState(1);  // Default line width
  const handleAddControlPoint = () => {
    setControlPoints([...controlPoints, '']);
  };

  const handleChangeControlPoint = (index: number, value: string) => {
    const newControlPoints = [...controlPoints];
    newControlPoints[index] = value;
    setControlPoints(newControlPoints);
  };

  return (
    <div>
      {controlPoints.map((point, index) => (
        <ParameterInput
          key={index}
          label={`制御点 ${index + 1}`}
          value={point}
          onChange={(value) => handleChangeControlPoint(index, value)}
        />
      ))}
      <button onClick={handleAddControlPoint}>+</button>
      <ColorPicker value={color} onChange={setColor} />
      <LineWidthSelector value={lineWidth} onChange={setLineWidth} />
    </div>
  );
};

export default SplineComponent;
