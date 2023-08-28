import React from 'react';

interface Position {
    x: number;
    y: number;
}

interface ShapeInfo {
    id: string;
    type: string;
    // Add other properties as needed
}

interface ShapeInfoTooltipProps {
    shapeInfo: ShapeInfo | null;
    position: Position;
}

const ShapeInfoTooltip: React.FC<ShapeInfoTooltipProps> = ({ shapeInfo, position }) => {
    if (!shapeInfo) return null;

    const style: React.CSSProperties = {
        left: position.x,
        top: position.y,
        position: 'absolute',
        zIndex: 1000,
        background: 'white',
        border: '1px solid black',
        padding: '5px',
    };

    return (
        <div style={style}>
            <div>ID: {shapeInfo.id}</div>
            <div>Type: {shapeInfo.type}</div>
            {/* Display other information here */}
        </div>
    );
};

export default ShapeInfoTooltip;
