import React, { useState, useEffect } from 'react';
import ParameterInput from '../../../common/ParameterInput';
const CubeComponent: React.FC = () => {
    return (
        <div>
            <ParameterInput label="頂点" value="" onChange={() => {
            }}/>
            <ParameterInput label="辺の長さ" value="" onChange={() => {
            }}/>
        </div>
    );
};

export default CubeComponent;
