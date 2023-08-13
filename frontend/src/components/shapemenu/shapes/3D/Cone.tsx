import React, { useState, useEffect } from 'react';
import ParameterInput from '../../../common/ParameterInput';
const ConeComponent: React.FC = () => {
    return (
        <div>
            <ParameterInput label="底面の中心" value="" onChange={() => {
            }}/>
            <ParameterInput label="半径" value="" onChange={() => {
            }}/>
            <ParameterInput label="高さ" value="" onChange={() => {
            }}/>
        </div>
    );
};

export default ConeComponent;
