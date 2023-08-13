import React, { useState } from 'react';
import ParameterInput from '../../../common/ParameterInput';

const HexahedronComponent: React.FC = () => {
    return (
        <div>
            <h3>Hexahedron Parameters</h3>
            <ParameterInput label="Vertex 1 (x,y,z)" value="" onChange={() => {}}/>
            <ParameterInput label="Vertex 2 (x,y,z)" value="" onChange={() => {}}/>
            <ParameterInput label="Vertex 3 (x,y,z)" value="" onChange={() => {}}/>
            <ParameterInput label="Vertex 4 (x,y,z)" value="" onChange={() => {}}/>
            <ParameterInput label="Vertex 5 (x,y,z)" value="" onChange={() => {}}/>
            <ParameterInput label="Vertex 6 (x,y,z)" value="" onChange={() => {}}/>
            <ParameterInput label="Vertex 7 (x,y,z)" value="" onChange={() => {}}/>
            <ParameterInput label="Vertex 8 (x,y,z)" value="" onChange={() => {}}/>
        </div>
    );
};


export default HexahedronComponent;
