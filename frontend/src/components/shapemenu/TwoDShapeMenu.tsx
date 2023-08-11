import React, { useState } from 'react';
import TwoDShapeParameters from './TwoDShapeParameters'; // TwoDShapeParametersをインポート

interface TwoDShapeMenuProps {
    onSelectShape: (shape: string) => void;
}

const TwoDShapeMenu: React.FC<TwoDShapeMenuProps> = ({ onSelectShape }) => {
    const [activeTab, setActiveTab] = useState<'basic' | 'advanced'>('basic');
    const [selectedShape, setSelectedShape] = useState<string | null>(null); // 選択された図形の状態

    const handleShapeSelection = (shape: string) => {
        onSelectShape(shape);
        setSelectedShape(shape); // 選択された図形を状態にセット
    };

    return (
        <div>
            <button onClick={() => setActiveTab('basic')}>基本図形</button>
            <button onClick={() => setActiveTab('advanced')}>高度図形</button>
            {activeTab === 'basic' && (
                <div>
                    <button onClick={() => handleShapeSelection('直線')}>直線</button>
                    <button onClick={() => handleShapeSelection('円')}>円</button>
                    {/* 他の2D基本図形 */}
                </div>
            )}
            {activeTab === 'advanced' && (
                <div>
                    <button onClick={() => handleShapeSelection('ベジェ曲線')}>ベジェ曲線</button>
                    {/* 他の2D高度図形 */}
                </div>
            )}
            {selectedShape && <TwoDShapeParameters shapeType={selectedShape} />} {/* 選択された図形のパラメータ入力フォーム */}
        </div>
    );
};

export default TwoDShapeMenu;
