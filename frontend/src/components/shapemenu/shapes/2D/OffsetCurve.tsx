import React, { useState, useEffect } from 'react';
import ParameterInput from '../../../common/ParameterInput';
const
    OffsetCurveComponent: React.FC = () => {
        return (
            <div>
                <label>元の曲線:</label>
                <input type="text"/>
                <label>距離:</label>
                <input type="number"/>
            </div>
        );
    };

export default OffsetCurveComponent;
