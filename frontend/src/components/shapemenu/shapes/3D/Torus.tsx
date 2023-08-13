import React, { useState } from 'react';
import ParameterInput from '../../../common/ParameterInput';

const TorusComponent: React.FC = () => {
    return (
        <div>
            <h3>Torus Parameters</h3>
            <ParameterInput label="メジャーラジウス" value="" onChange={() => {}}/>
            <ParameterInput label="マイナーラジウス" value="" onChange={() => {}}/>
            <ParameterInput label="セクションの数" value="" onChange={() => {}}/>
            <ParameterInput label="回転角度 (degree)" value="" onChange={() => {}}/>
        </div>
    );
};


export default TorusComponent;
