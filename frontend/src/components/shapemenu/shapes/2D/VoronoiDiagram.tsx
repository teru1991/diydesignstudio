import React, { useState, useEffect } from 'react';
import ParameterInput from '../../../common/ParameterInput';
const VoronoiDiagramComponent: React.FC = () => {
    return (
        <div>
            <label>生成点:</label>
            <input type="text" placeholder="点1"/>
            <input type="text" placeholder="点2"/>
            {/* 他の点も追加可能 */}
        </div>
    );
};

export default VoronoiDiagramComponent;
