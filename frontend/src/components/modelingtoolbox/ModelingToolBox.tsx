import React, { useState } from 'react';
import ShapeMenu from '../shapemenu/ShapeMenu';
import PreviewArea from '../previewarea/PreviewArea';
import LineWidthSelector from '../common/LineWidthSelector';
import ColorPicker from '../common/ColorPicker';

interface ModelingToolBoxProps {
    activeTab: '2D' | '3D';
    setActiveTab: React.Dispatch<React.SetStateAction<'2D' | '3D'>>;
    onTabChange?: (tab: '2D' | '3D') => void;
}


const ModelingToolBox: React.FC<ModelingToolBoxProps> = ({ activeTab, setActiveTab, onTabChange }) => { // onTabChange を引数として追加
    const [selectedShape, setSelectedShape] = useState<string>('');
    const [lineWidth, setLineWidth] = useState<number>(1);
    const [color, setColor] = useState<string>('#000000');

    const handleShapeSelection = (shape: string) => {
        setSelectedShape(shape);
        if (onTabChange) {
            onTabChange(activeTab);
        }
    };

    return (
        <div>
            <ShapeMenu onSelectShape={handleShapeSelection} activeTab={activeTab} setActiveTab={setActiveTab} />
            <LineWidthSelector value={lineWidth} onChange={setLineWidth} />
            <ColorPicker value={color} onChange={setColor} />
            <PreviewArea scale={10} />
            {/* 描画ボタン */}
            <button onClick={() => console.log('図形を描画')}>描画</button>
        </div>
    );
};

export default ModelingToolBox;
