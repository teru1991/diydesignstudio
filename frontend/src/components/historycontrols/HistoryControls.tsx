// HistoryControls.tsx
import React from 'react';

interface HistoryControlsProps {
    onUndo: () => void;
    onRedo: () => void;
}

const HistoryControls: React.FC<HistoryControlsProps> = ({ onUndo, onRedo }) => {
    return (
        <div>
            <button onClick={onUndo}>Undo</button>
            <button onClick={onRedo}>Redo</button>
        </div>
    );
};

export default HistoryControls;
