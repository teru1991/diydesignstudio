
import React from 'react';
import withZoom from "../../../../shared/hooks/HOC/withZoom";
import withScroll from "../../../../shared/hooks/HOC/withScroll";
import withRotate from '../../../../shared/hooks/HOC/withRotate';
import Shape2DRenderer from "../ShapeRenderer/Shape2DRenderer";
import Shape3DRenderer from "../ShapeRenderer/Shape3DRendere";

interface ShapePreviewProps {
    type: string;
    data: any;
    color: string;
    lineWidth: number;
    mode?: "2D" | "3D";
}

const ShapePreview: React.FC<ShapePreviewProps> = ({ type, data, color, lineWidth, mode = "2D" }) => {
    const rendererProps = {
        type,
        data,
        color,
        lineWidth
    };

    if (mode === "2D") {
        return <Shape2DRenderer {...rendererProps} />;
    } else if (mode === "3D") {
        return <Shape3DRenderer {...rendererProps} />;
    }

    return <div>Invalid mode selected</div>;
};

export default ShapePreview;