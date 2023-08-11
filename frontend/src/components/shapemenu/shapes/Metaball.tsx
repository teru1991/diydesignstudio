import React, { useState, useEffect } from 'react';
import ParameterInput from '../../common/ParameterInput';
const MetaballComponent: React.FC = () => {
    return (
        <div>
            <label>中心点:</label>
            <input type="text"/>
            <label>半径:</label>
            <input type="number"/>
            <label>強度:</label>
            <input type="number"/>
        </div>
    );
};

export default MetaballComponent;
