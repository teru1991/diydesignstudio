import React, { useState } from 'react';

interface ThreeDShapeMenuProps {
    onSelectShape: (shape: string) => void;
}

const ThreeDShapeMenu: React.FC<ThreeDShapeMenuProps> = ({ onSelectShape }) => {
    const [activeTab, setActiveTab] = useState<'basic' | 'advanced'>('basic');

    return (
        <div>
            <button onClick={() => setActiveTab('basic')}>基本図形</button>
            <button onClick={() => setActiveTab('advanced')}>高度図形</button>
            {activeTab === 'basic' && (
                <div>
                    <button onClick={() => onSelectShape('立方体')}>立方体</button>
                    {/* 他の3D基本図形 */}
                </div>
            )}
            {activeTab === 'advanced' && (
                <div>
                    <button onClick={() => onSelectShape('自由曲面')}>自由曲面</button>
                    {/* 他の3D高度図形 */}
                </div>
            )}
        </div>
    );
};

export default ThreeDShapeMenu;
