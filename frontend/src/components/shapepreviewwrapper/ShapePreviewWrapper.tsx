// ShapePreviewWrapper.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios'; // axiosをインポート
import ShapePreview from "../shapepreview/ShapePreview";

interface ShapePreviewWrapperProps {
    shapeType: string;
    shapeData: any;
}

const ShapePreviewWrapper: React.FC<ShapePreviewWrapperProps> = ({ shapeType, shapeData }) => {
    const [previewData, setPreviewData] = useState<any>({});

    useEffect(() => {
        // バックエンドから図形データを取得するロジックを追加
        setPreviewData(shapeData); // 仮のロジック
    }, [shapeType, shapeData]);

    return (
        <div>
            <h3>Shape Preview</h3>
            {previewData && (
                <ShapePreview
                    type={shapeType}
                    data={previewData}
                    color={previewData.color}
                    lineWidth={previewData.lineWidth}
                />
            )}
        </div>
    );
};

export default ShapePreviewWrapper;