import React, { useState, useEffect } from 'react';
import ParameterInput from '../../../common/ParameterInput';
const SubdivisionSurfaceComponent: React.FC = () => {
    return (
        <div>
            <label>制御メッシュ:</label>
            {/* メッシュの入力 */}
            <label>細分化レベル:</label>
            <input type="number"/>
        </div>
    );
};

export default SubdivisionSurfaceComponent;
