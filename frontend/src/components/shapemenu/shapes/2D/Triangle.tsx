import React from 'react';
import ParameterInput from '../../../common/ParameterInput';

const TriangleComponent: React.FC = () => {
  return (
    <div>
      <ParameterInput label="頂点1" value="" onChange={() => {}} />
      <ParameterInput label="頂点2" value="" onChange={() => {}} />
      <ParameterInput label="頂点3" value="" onChange={() => {}} />
    </div>
  );
};

export default TriangleComponent;
