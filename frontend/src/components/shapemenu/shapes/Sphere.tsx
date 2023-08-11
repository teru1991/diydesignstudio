import React, { useState, useEffect } from 'react';
import ParameterInput from '../../common/ParameterInput';
const SphereComponent: React.FC = () => {
    return (
        <div>
            <ParameterInput label="中心点" value="" onChange={() => {
            }}/>
            <ParameterInput label="半径" value="" onChange={() => {
            }}/>
        </div>
    );
};

export default SphereComponent;
