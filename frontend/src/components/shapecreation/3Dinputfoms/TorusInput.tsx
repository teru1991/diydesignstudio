import React from 'react';

interface TorusInputProps {
    center: number[];
    majorRadius: number;
    minorRadius: number;
}

const TorusInput: React.FC<TorusInputProps> = ({ center, majorRadius, minorRadius }) => {
    return (
        <div>
            <h3>トーラス</h3>
            <div>中心点座標: [{center[0]}, {center[1]}, {center[2]}]</div>
            <div>メジャー半径: {majorRadius}</div>
            <div>マイナー半径: {minorRadius}</div>
        </div>
    );
};

export default TorusInput;
