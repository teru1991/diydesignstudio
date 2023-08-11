import React, { useState, useEffect } from 'react';
import ParameterInput from '../../common/ParameterInput';
const FractalComponent: React.FC = () => {
    return (
        <div>
            <label>イテレーション数:</label>
            <input type="number"/>
            <label>スケール:</label>
            <input type="number"/>
        </div>
    );
};

export default FractalComponent;
