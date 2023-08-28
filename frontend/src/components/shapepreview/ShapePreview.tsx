
import React from 'react';
import withZoom from "../HOC/withZoom";
import withScroll from "../HOC/withScroll";
import withRotate from '../HOC/withRotate';
import Shape2DRenderer from "../shaperenderer/Shape2DRenderer/Shape2DRenderer";
import Shape3DRenderer from "../shaperenderer/shape3Drendere/Shape3DRendere";

interface ShapePreviewProps {
    type: string;
    data: any;
    color: string;
    lineWidth: number;
    mode?: "2D" | "3D";
}

const ShapePreview: React.FC<ShapePreviewProps> = ({ type, data, color, lineWidth, mode = "2D" }) => {
    if (mode === "2D") {
        return <Shape2DRenderer type={type} data={data} color={color} lineWidth={lineWidth} />;
    } else if (mode === "3D") {
        return <Shape3DRenderer type={type} data={data} color={color} />;
    }

    return <div>Invalid mode selected</div>;
};


export default withZoom(withScroll(withRotate(ShapePreview)));
