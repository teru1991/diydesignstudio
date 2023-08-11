import React, { useState } from 'react';
import TwoDShapeMenu from './TwoDShapeMenu';
import ThreeDShapeMenu from './ThreeDShapeMenu';

interface ShapeMenuProps {
    onSelectShape: (shape: string) => void;
    activeTab: '2D' | '3D';
    setActiveTab: React.Dispatch<React.SetStateAction<'2D' | '3D'>>;
}


const ShapeMenu: React.FC<ShapeMenuProps> = ({ onSelectShape, activeTab, setActiveTab }) => {
    // 既存の useState の定義を削除します
    // const [activeTab, setActiveTab] = useState<'2D' | '3D'>('2D');

    return (
        <div>
            <button onClick={() => setActiveTab('2D')}>2D図形</button>
            <button onClick={() => setActiveTab('3D')}>3D図形</button>
            {activeTab === '2D' && <TwoDShapeMenu onSelectShape={onSelectShape} />}
            {activeTab === '3D' && <ThreeDShapeMenu onSelectShape={onSelectShape} />}
        </div>
    );
};


export default ShapeMenu;
