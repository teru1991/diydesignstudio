// GridArea.tsx
import React from 'react';
import ShapeCreation from "../shapecreation/ShapeCreation";

interface GridAreaProps {
    showShapeCreation: boolean;
    initialTab: '3D' | '2D'; // 追加
}


const GridArea: React.FC<GridAreaProps> = ({ showShapeCreation, initialTab }) => {
    return (
        <div>
            {showShapeCreation && (
                <div style={{ position: 'absolute', left: 0, top: 'メニューバーの高さ' }}>
                    <ShapeCreation initialTab={initialTab} />
                </div>
            )}
        </div>
    );
};

export default GridArea;
