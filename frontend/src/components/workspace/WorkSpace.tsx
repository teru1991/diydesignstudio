import React from 'react';
import WorkSpaceToolBox from '../workspace/WorkSpaceToolBox'; // 適切なパスに変更してください

interface WorkSpaceProps {
    activeModelingTab: '2D' | '3D';
    initialTab: '3D' | '2D';
}

const WorkSpace: React.FC<WorkSpaceProps> = ({ activeModelingTab }) => {
    return (
        <div className="workspace">
            <WorkSpaceToolBox activeModelingTab={activeModelingTab} />
        </div>
    );
};

export default WorkSpace;
