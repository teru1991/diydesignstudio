import React from 'react';
import ParameterInput from '../../../common/ParameterInput';

const LineComponent: React.FC = () => {
  return (
    <div>
      <ParameterInput label="始点" value="" onChange={() => {}} />
      <ParameterInput label="終点" value="" onChange={() => {}} />
    </div>
  );
};

export default LineComponent;
