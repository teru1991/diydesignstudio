import React, { useState, useEffect } from 'react';
import ParameterInput from '../../common/ParameterInput';
const DelaunayTriangulationComponent: React.FC = () => {
    return (
        <div>
            <label>頂点集合:</label>
            <input type="text" placeholder="頂点1"/>
            <input type="text" placeholder="頂点2"/>
            {/* 他の頂点も追加可能 */}
        </div>
    );
};

export default DelaunayTriangulationComponent;
