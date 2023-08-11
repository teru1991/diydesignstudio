import React from 'react';
import ParameterInput from '../../../common/ParameterInput';

const ParallelogramComponent: React.FC = () => {
  return (
    <div>
      <ParameterInput label="頂点" value="" onChange={() => {}} />
      <ParameterInput label="辺の長さ" value="" onChange={() => {}} />
      <ParameterInput label="角度" value="" onChange={() => {}} />
    </div>
  );
};

export default ParallelogramComponent;
