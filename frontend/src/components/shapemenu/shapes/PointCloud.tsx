import React, { useState, useEffect } from 'react';
import ParameterInput from '../../common/ParameterInput';
const PointCloudComponent: React.FC = () => {
    return (
        <div>
            <label>点の座標:</label>
            {/* 座標の入力 */}
            <label>色:</label>
            <input type="color"/>
            <label>密度:</label>
            <input type="number"/>
        </div>
    );
};

export default PointCloudComponent;
