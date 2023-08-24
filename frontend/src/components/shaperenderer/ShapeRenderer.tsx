
import React from 'react';

interface ShapeProps {
    type: string; // 図形のタイプ（例："rectangle", "circle"）
    data: any; // 図形のデータ（例：{ length: 100, width: 50 }）
    color: string;
    lineWidth: number;
}

const ShapeRenderer: React.FC<ShapeProps> = ({ type, data, color, lineWidth }) => {
    switch (type) {
        case 'rectangle':
            return (
                <div
                    style={{
                        width: `${data.width}px`,
                        height: `${data.length}px`,
                        backgroundColor: color,
                        border: `${lineWidth}px solid ${color}`
                    }}
                />
            );
        // 他の図形タイプに対するロジックもここに追加します。
        // case 'circle':
        //     return ...
        default:
            return <div>Unsupported shape type</div>;
    }
};

export default ShapeRenderer;
