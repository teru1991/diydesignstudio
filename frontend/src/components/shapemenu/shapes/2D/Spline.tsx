import React, { useState } from 'react';
import ParameterInput from '../../../common/ParameterInput';

const SplineComponent: React.FC = () => {
  const [controlPoints, setControlPoints] = useState<string[]>(['']);

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
    </div>
  );
};

export default SplineComponent;
