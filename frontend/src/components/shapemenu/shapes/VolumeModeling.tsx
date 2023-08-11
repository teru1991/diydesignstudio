import React, { useState, useEffect } from 'react';
import ParameterInput from '../../common/ParameterInput';
const VolumeModelingComponent: React.FC = () => {
    return (
        <div>
            <label>密度関数:</label>
            <input type="text"/>
            <label>サンプリングレート:</label>
            <input type="number"/>
        </div>
    );
};

export default VolumeModelingComponent;
