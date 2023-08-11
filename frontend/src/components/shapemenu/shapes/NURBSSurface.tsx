import React, { useState, useEffect } from 'react';
import ParameterInput from '../../common/ParameterInput';
const NURBSSurfaceComponent: React.FC = () => {
    return (
        <div>
            <label>制御点:</label>
            {/* 制御点の入力 */}
            <label>重み:</label>
            <input type="number"/>
            <label>ノットベクトル:</label>
            <input type="text"/>
        </div>
    );
};

export default NURBSSurfaceComponent;
