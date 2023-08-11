import React, { useState, useEffect } from 'react';
import ParameterInput from '../../common/ParameterInput';
const SculptingComponent: React.FC = () => {
    return (
        <div>
            <label>メッシュ:</label>
            {/* メッシュの入力 */}
            <label>ブラシパラメータ:</label>
            <input type="text"/>
        </div>
    );
};

export default SculptingComponent;
