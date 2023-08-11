// GridArea.tsx
import React from 'react';

interface GridAreaProps {
    showShapeCreation: boolean;
    initialTab: '3D' | '2D'; // 追加
}


const GridArea: React.FC<GridAreaProps> = ({ showShapeCreation, initialTab }) => {
    return (
        <div>
            {showShapeCreation && (
                <div style={{ position: 'absolute', left: 0, top: 'メニューバーの高さ' }}>
                </div>
            )}
        </div>
    );
};

export default GridArea;
