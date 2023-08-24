// ShapeUpdateControls.tsx
import React from 'react';

interface ShapeUpdateControlsProps {
    onUpdate: () => void;
    onDelete: () => void;
}

const ShapeUpdateControls: React.FC<ShapeUpdateControlsProps> = ({ onUpdate, onDelete }) => {
    return (
        <div>
            <button onClick={onUpdate}>Update Shape</button>
            <button onClick={onDelete}>Delete Shape</button>
        </div>
    );
};

export default ShapeUpdateControls;
