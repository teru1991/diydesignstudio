import React from 'react';
import ParameterInput from '../../../common/ParameterInput';

const ArcComponent: React.FC = () => {
  return (
    <div>
      <ParameterInput label="中心点" value="" onChange={() => {}} />
      <ParameterInput label="半径" value="" onChange={() => {}} />
      <ParameterInput label="始点角度" value="" onChange={() => {}} />
      <ParameterInput label="終点角度" value="" onChange={() => {}} />
    </div>
  );
};

export default ArcComponent;
