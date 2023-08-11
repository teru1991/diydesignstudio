import React, { useState } from 'react';
import ShapeMenu from '../shapemenu/ShapeMenu';
import ModelingToolBox from '../modelingtoolbox/ModelingToolBox';

const ModelingMenu: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'2D' | '3D'>('3D');
    const [showModelingToolBox, setShowModelingToolBox] = useState(false); // ModelingToolBoxの表示管理

    const handleShapeSelection = (shape: string) => {
        console.log(`Selected shape: ${shape}`);
        // ここで図形のパラメータ入力フォームを表示するロジックを追加
    };

    return (
        <div className="ribbon-menu">
            <button onClick={() => { setActiveTab('2D'); handleShapeSelection('2D ObjectCreation'); }}>2D ObjectCreation</button>
            <button onClick={() => { setActiveTab('3D'); handleShapeSelection('3D ObjectCreation'); }}>3D ObjectCreation</button>
            <ModelingToolBox activeTab={activeTab} setActiveTab={setActiveTab} />
            {/* 以下のボタンはそのまま保持 */}
            <button onClick={() => console.log("3D Object Editing")}>3D Object Editing</button>
            <button onClick={() => console.log("3D Object Transformation")}>3D Object Transformation</button>
            <button onClick={() => console.log("2D to 3D Conversion")}>2D to 3D Conversion</button>
            <button onClick={() => console.log("Mesh Modeling")}>Mesh Modeling</button>
            <button onClick={() => console.log("Architectural Modeling")}>Architectural Modeling</button>
        </div>
    );
};

export default ModelingMenu;
