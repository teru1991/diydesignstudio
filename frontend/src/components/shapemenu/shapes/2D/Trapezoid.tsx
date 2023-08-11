import React from 'react';
import ParameterInput from '../../../common/ParameterInput';

const TrapezoidComponent: React.FC = () => {
  return (
    <div>
      <ParameterInput label="上底" value="" onChange={() => {}} />
      <ParameterInput label="下底" value="" onChange={() => {}} />
      <ParameterInput label="高さ" value="" onChange={() => {}} />
    </div>
  );
};

export default TrapezoidComponent;
