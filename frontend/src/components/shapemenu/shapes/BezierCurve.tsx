import React, { useState, useEffect } from 'react';
import ParameterInput from '../../common/ParameterInput';

const BezierCurveComponent: React.FC = () => {
    const [degree, setDegree] = useState(3); // 次数のデフォルト値
    const controlPoints = Array.from({length: degree + 1}, (_, i) => (
        <input key={i} type="text" placeholder={`制御点${i}`}/>
    ));

    return (
        <div>
            <label>次数:</label>
            <input type="number" value={degree} onChange={(e) => setDegree(Number(e.target.value))}/>
            {controlPoints}
        </div>
    );
};

export default BezierCurveComponent;
