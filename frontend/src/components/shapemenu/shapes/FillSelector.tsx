import React, { useState, useEffect } from 'react';
import ParameterInput from '../../common/ParameterInput';
interface FillSelectorProps {
    value: boolean;
    onChange: (fill: boolean) => void;
}

const FillSelector: React.FC<FillSelectorProps> = ({value, onChange}) => {
    return (
        <div>
            <label>Fill:</label>
            <input type="checkbox" checked={value} onChange={e => onChange(e.target.checked)}/>
        </div>
    );
};

export default FillSelector;
