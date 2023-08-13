import React, { useState } from 'react';
import TwoDShapeMenu from '../shapemenu/TwoDShapeMenu';
import ThreeDShapeMenu from '../shapemenu/ThreeDShapeMenu';

interface WorkSpaceToolBoxProps {
    activeModelingTab: '2D' | '3D';
}

const WorkSpaceToolBox: React.FC<WorkSpaceToolBoxProps> = ({ activeModelingTab }) => {
    const [activeTab, setActiveTab] = useState<'2D' | '3D'>(activeModelingTab);

    return (
        <div className="workspace-toolbox">
            <div className="tabs">
                <button onClick={() => setActiveTab('2D')}>2D</button>
                <button onClick={() => setActiveTab('3D')}>3D</button>
            </div>
            {activeTab === '2D' && <TwoDShapeMenu onSelectShape={(shape) => console.log(`Selected 2D shape: ${shape}`)} />}
            {activeTab === '3D' && <ThreeDShapeMenu onSelectShape={(shape) => console.log(`Selected 3D shape: ${shape}`)} />}
        </div>
    );
};

export default WorkSpaceToolBox;
