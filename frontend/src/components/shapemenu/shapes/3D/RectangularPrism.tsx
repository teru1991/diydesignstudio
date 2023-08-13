import React from 'react';
import ParameterInput from '../../../common/ParameterInput';

const RectangularPrismComponent: React.FC = () => {
    return (
        <div>
            <ParameterInput label="長さ" value="" onChange={() => {}}/>
            <ParameterInput label="幅" value="" onChange={() => {}}/>
            <ParameterInput label="高さ" value="" onChange={() => {}}/>
        </div>
    );
};

export default RectangularPrismComponent;
