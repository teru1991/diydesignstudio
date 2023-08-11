import React, { useState, useEffect } from 'react';
import ParameterInput from '../../common/ParameterInput';
const ParametricCurveComponent: React.FC = () => {
    return (
        <div>
            <label>方程式 (x(t), y(t)):</label>
            <input type="text" placeholder="x(t)"/>
            <input type="text" placeholder="y(t)"/>
            <label>パラメータ範囲 (最小, 最大):</label>
            <input type="number" placeholder="最小"/>
            <input type="number" placeholder="最大"/>
        </div>
    );
};

export default ParametricCurveComponent;
