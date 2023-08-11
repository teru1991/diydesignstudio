import React, { useState, useEffect } from 'react';
import ParameterInput from '../../common/ParameterInput';
const ParametricSurfaceComponent: React.FC = () => {
    return (
        <div>
            <label>方程式:</label>
            <input type="text" placeholder="x(u,v)"/>
            <input type="text" placeholder="y(u,v)"/>
            <input type="text" placeholder="z(u,v)"/>
            <label>パラメータ範囲:</label>
            <input type="text" placeholder="uの範囲"/>
            <input type="text" placeholder="vの範囲"/>
        </div>
    );
};

export default ParametricSurfaceComponent;
