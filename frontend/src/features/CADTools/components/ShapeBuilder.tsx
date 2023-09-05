import React from 'react';
import ShapeCreationWrapper from "./ShapeCreation/ShapeCreationWrapper";
import ShapePreviewWrapper from "./ShapePreview/ShapePreviewWrapper";

const ShapeBuilder: React.FC = () => {
    const [shapeType, setShapeType] = React.useState<string>('');
    const [shapeData, setShapeData] = React.useState<any>({});

    return (
        <div>
            <h1>Shape Builder Tool</h1>

            {/* 入力部分 */}
            <ShapeCreationWrapper
                onShapeTypeChange={setShapeType}
                onShapeDataChange={setShapeData}
            />

            {/* プレビュー部分 */}
            <ShapePreviewWrapper
                shapeType={shapeType}
                shapeData={shapeData}
            />
        </div>
    );
};

export default ShapeBuilder;
