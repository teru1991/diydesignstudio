import React from 'react';
import ParameterInput from '../../../common/ParameterInput';

const EllipseComponent: React.FC = () => {
  return (
    <div>
      <ParameterInput label="長軸" value="" onChange={() => {}} />
      <ParameterInput label="短軸" value="" onChange={() => {}} />
      <ParameterInput label="中心点" value="" onChange={() => {}} />
    </div>
  );
};

export default EllipseComponent;
