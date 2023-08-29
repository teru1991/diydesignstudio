import React, { useState } from 'react';
import ShapeInfoTooltip from "../shapeinfotooltip/ShapeInfoTooltip";

export interface ViewShape {
    name: string;
    // ... other shape properties
}
export interface ModelShape {
    id: string;
    // other properties specific to ModelShape
}

interface ShapeInfo {
    id: string;
    type: string;
    // other properties
}

export interface ViewingCanvasProps {
    modelData: {
        shapes: ModelShape[];
        // other properties
    };
    onShapeSelect?: (shape: ViewShape) => void;
}

const transformToShapeInfo = (modelShape: ModelShape): ShapeInfo => {
    // Implement the transformation logic here
    return {
        id: modelShape.id,
        type: 'some-default-type', // Add the appropriate type value
        // other properties from modelShape
    };
};

const ViewingCanvas: React.FC<ViewingCanvasProps> = ({ modelData }) => {
    const [hoveredShapeInfo, setHoveredShapeInfo] = useState<ShapeInfo | null>(null);
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

    const handleShapeMouseOver = (shape: ModelShape, event: React.MouseEvent<HTMLDivElement>) => {
        const shapeInfo = transformToShapeInfo(shape); // Transform the model shape
        setHoveredShapeInfo(shapeInfo);
        setTooltipPosition({ x: event.clientX, y: event.clientY });
    };

    const handleShapeMouseOut = () => {
        setHoveredShapeInfo(null);
    };

    return (
        <div className="viewing-canvas">
            {modelData.shapes.map(shape => (
                <div
                    key={shape.id}
                    onMouseOver={(e) => handleShapeMouseOver(shape, e)}
                    onMouseOut={handleShapeMouseOut}
                    // Other shape rendering logic
                >
                    {/* Shape rendering */}
                </div>
            ))}
            <ShapeInfoTooltip shapeInfo={hoveredShapeInfo} position={tooltipPosition} />
        </div>
    );
};

export default ViewingCanvas;
