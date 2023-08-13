import React, { useState, useEffect } from 'react';
import ParameterInput from '../../../common/ParameterInput';
const ProceduralModelingComponent: React.FC = () => {
    return (
        <div>
            <label>ルールセット:</label>
            <input type="text"/>
            <label>パラメータ:</label>
            <input type="text"/>
        </div>
    );
};

export default ProceduralModelingComponent;
