import React from 'react';
import Shape2DRenderer from "../shaperenderer/Shape2DRenderer/Shape2DRenderer";// これは先ほど提供した2Dの図形描画コンポーネントへのパスを正しく設定してください
import Shape3DRenderer from "../shaperenderer/shape3Drendere/Shape3DRendere";// これは3Dの図形描画コンポーネントへのパスを正しく設定してください

interface ShapePreviewWrapperProps {
    shapeType: string | null;
    // 必要に応じて他のプロップスも追加します。例えば、図形のパラメータ、色、線の太さなど
}

const ShapePreviewWrapper: React.FC<ShapePreviewWrapperProps> = ({ shapeType }) => {
    if (!shapeType) {
        return null; // 何も選択されていない場合は何も表示しない
    }

    const commonProps = {
        type: shapeType,
        data: {}, // 必要なデータを提供する
        color: "#000000", // デフォルトの色
        lineWidth: 1, // デフォルトの線の太さ
    };

    return (
        <div>
            <h3>Shape Preview</h3>
            {shapeType === '2D' ? (
                <Shape2DRenderer {...commonProps} /* 他の必要なプロップス */ />
            ) : (
                <Shape3DRenderer {...commonProps} /* 他の必要なプロップス */ />
            )}
        </div>
    );
};

export default ShapePreviewWrapper;
