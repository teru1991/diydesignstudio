import React, { useState, useEffect } from 'react';
import ParameterInput from '../../common/ParameterInput';
const TetrahedronComponent: React.FC = () => {
    return (
        <div>
            <ParameterInput label="底辺の三角形の底辺" value="" onChange={() => {
            }}/>
            <ParameterInput label="底辺の三角形の高さ" value="" onChange={() => {
            }}/>
            <ParameterInput label="四面体の高さ" value="" onChange={() => {
            }}/>
        </div>
    );
};

export default TetrahedronComponent;
