import React, { useState, useEffect } from 'react';
import ParameterInput from '../../../common/ParameterInput';
const CompositeSurfaceComponent: React.FC = () => {
    return (
        <div>
            <label>結合する曲面:</label>
            {/* 曲面の選択 */}
            <label>結合方法:</label>
            <select>
                <option value="union">結合</option>
                <option value="intersect">交差</option>
                {/* 他の結合方法 */}
            </select>
        </div>
    );
};

export default CompositeSurfaceComponent;
