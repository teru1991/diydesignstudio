import React from 'react';

interface DrawingModeToggleProps {
    onModeChange: (mode: string) => void;
}

const DrawingModeToggle: React.FC<DrawingModeToggleProps> = ({ onModeChange }) => {
    return (
        <div>
            <button onClick={() => onModeChange('normal')}>通常モード</button>
            <button onClick={() => onModeChange('drawAnywhere')}>任意の位置に描画</button>
            <button onClick={() => onModeChange('attachToShape')}>図形につなげる</button>
        </div>
    );
};

export default DrawingModeToggle;
