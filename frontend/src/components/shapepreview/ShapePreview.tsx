
import React from 'react';
import withZoom from "../HOC/withZoom";
import withScroll from "../HOC/withScroll";
import withRotate from '../HOC/withRotate';
import ShapeRenderer from "../shaperenderer/ShapeRenderer";

interface ShapePreviewProps {
    type: string;
    data: any;
    color: string;
    lineWidth: number;
}

const ShapePreview: React.FC<ShapePreviewProps> = ({ type, data, color, lineWidth }) => {
    return (
        <div>
            <ShapeRenderer type={type} data={data} color={color} lineWidth={lineWidth} />
        </div>
    );
};

export default withZoom(withScroll(withRotate(ShapePreview)));
