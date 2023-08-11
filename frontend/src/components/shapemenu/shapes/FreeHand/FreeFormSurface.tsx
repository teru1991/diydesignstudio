import React, { useState, useEffect } from 'react';
import ParameterInput from '../../../common/ParameterInput';
const FreeFormSurfaceComponent: React.FC = () => {
    return (
        <div>
            <label>制御点:</label>
            {/* 制御点の入力 */}
            <label>次数:</label>
            <input type="number"/>
            <label>パラメータ範囲:</label>
            <input type="text"/>
        </div>
    );
};

export default FreeFormSurfaceComponent;
