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
        <div className={'shape-menu'}>
            <button onClick={() => setActiveTab('basic')}>基本図形</button>
            <button onClick={() => setActiveTab('advanced')}>高度図形</button>
            {activeTab === 'basic' && (
                <div>
                    <button onClick={() => handleShapeSelection('直線')}>直線</button>
                    <button onClick={() => handleShapeSelection('円')}>円</button>
                    <button onClick={() => handleShapeSelection('楕円')}>楕円</button>
                    <button onClick={() => handleShapeSelection('弧')}>弧</button>
                    <button onClick={() => handleShapeSelection('スプライン曲線')}>スプライン曲線</button>
                    <button onClick={() => handleShapeSelection('三角形')}>三角形</button>
                    <button onClick={() => handleShapeSelection('正方形')}>正方形</button>
                    <button onClick={() => handleShapeSelection('長方形')}>長方形</button>
                    <button onClick={() => handleShapeSelection('ひし形')}>ひし形</button>
                    <button onClick={() => handleShapeSelection('平行四辺形')}>平行四辺形</button>
                    <button onClick={() => handleShapeSelection('台形')}>台形</button>
                    <button onClick={() => handleShapeSelection('正多角形')}>正多角形</button>
                    {/* 他の2D基本図形 */}
                </div>
            )}
            {activeTab === 'advanced' && (
                <div>
                    <button onClick={() => handleShapeSelection('ベジェ曲線')}>ベジェ曲線</button>
                    <button onClick={() => handleShapeSelection('Bスプライン曲線')}>Bスプライン曲線</button>
                    <button onClick={() => handleShapeSelection('フラクタル')}>フラクタル</button>
                    <button onClick={() => handleShapeSelection('オフセット曲線')}>オフセット曲線</button>
                    <button onClick={() => handleShapeSelection('パラメトリック曲線')}>パラメトリック曲線</button>
                    <button onClick={() => handleShapeSelection('ボロノイ図')}>ボロノイ図</button>
                    {/* 他の2D高度図形 */}
                </div>
            )}
            {selectedShape && <TwoDShapeParameters shapeType={selectedShape} />} {/* 選択された図形のパラメータ入力フォーム */}
        </div>
    );
}

export default TwoDShapeMenu;
