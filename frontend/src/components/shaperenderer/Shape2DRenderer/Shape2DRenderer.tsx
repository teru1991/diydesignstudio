import React from 'react';

interface Shape2DProps {
    type: string;
    data: any;
    color: string;
    lineWidth: number;
}

const Shape2DRenderer: React.FC<Shape2DProps> = ({ type, data, color, lineWidth }) => {
    switch (type) {
        case 'rectangle':
            return (
                <div
                    style={{
                        width: `${data.width}px`,
                        height: `${data.height}px`,
                        backgroundColor: color,
                        border: `${lineWidth}px solid ${color}`
                    }}
                />
            );
        // 例: 円のロジック
        case 'circle':
            return (
                <div
                    style={{
                        width: `${data.radius * 2}px`,
                        height: `${data.radius * 2}px`,
                        backgroundColor: color,
                        border: `${lineWidth}px solid ${color}`,
                        borderRadius: '50%'
                    }}
                />
            );
        // 他の2D図形のロジックもここに追加します。
        default:
            return <div>Unsupported 2D shape type</div>;
    }
};

export default Shape2DRenderer;
