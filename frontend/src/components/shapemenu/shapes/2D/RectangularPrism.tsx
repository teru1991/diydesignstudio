import React from 'react';
import ParameterInput from '../../../common/ParameterInput';

const RectangularPrismComponent: React.FC = () => {
  return (
    <div>
      <ParameterInput label="頂点" value="" onChange={() => {}} />
      <ParameterInput label="長辺" value="" onChange={() => {}} />
      <ParameterInput label="短辺" value="" onChange={() => {}} />
      <ParameterInput label="高さ" value="" onChange={() => {}} />
    </div>
  );
};

export default RectangularPrismComponent;
