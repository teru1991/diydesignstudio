import React, { useState, useEffect } from 'react';
import ParameterInput from '../../common/ParameterInput';
const ContourModelingComponent: React.FC = () => {
    return (
        <div>
            <label>スカラー場:</label>
            <input type="text"/>
            <label>閾値:</label>
            <input type="number"/>
        </div>
    );
};

export default ContourModelingComponent;
