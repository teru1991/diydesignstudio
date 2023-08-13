import React, { useState } from 'react';

interface ThreeDShapeMenuProps {
    onSelectShape: (shape: string) => void;
}

const ThreeDShapeMenu: React.FC<ThreeDShapeMenuProps> = ({ onSelectShape }) => {
    const [activeTab, setActiveTab] = useState<'basic' | 'advanced'>('basic');

    return (
        <div className={'shape-menu'}>
            <button onClick={() => setActiveTab('basic')}>基本図形</button>
            <button onClick={() => setActiveTab('advanced')}>高度図形</button>
            {activeTab === 'basic' && (
                <div>
                    <button onClick={() => onSelectShape('立方体')}>立方体</button>
                    <button onClick={() => onSelectShape('球体')}>球体</button>
                    <button onClick={() => onSelectShape('円柱')}>円柱</button>
                    <button onClick={() => onSelectShape('円錐')}>円錐</button>
                    <button onClick={() => onSelectShape('四面体')}>四面体</button>
                    <button onClick={() => onSelectShape('五面体')}>五面体</button>
                    <button onClick={() => onSelectShape('六面体')}>六面体</button>
                    <button onClick={() => onSelectShape('トーラス')}>トーラス</button>
                    {/* 他の3D基本図形 */}
                </div>
            )}
            {activeTab === 'advanced' && (
                <div>
                    <button onClick={() => onSelectShape('自由曲面')}>自由曲面</button>
                    <button onClick={() => onSelectShape('ベジェ曲線')}>ベジェ曲線</button>
                    <button onClick={() => onSelectShape('コンポジットサーフェス')}>コンポジットサーフェス</button>
                    <button onClick={() => onSelectShape('コンターモデリング')}>コンターモデリング</button>
                    <button onClick={() => onSelectShape('デローニ三角形分割')}>デローニ三角形分割</button>
                    <button onClick={() => onSelectShape('フラクタル地形')}>フラクタル地形</button>
                    <button onClick={() => onSelectShape('メタボール')}>メタボール</button>
                    <button onClick={() => onSelectShape('NURBSサーフェス')}>NURBSサーフェス</button>
                    <button onClick={() => onSelectShape('パラメトリックサーフェス')}>パラメトリックサーフェス</button>
                    <button onClick={() => onSelectShape('点群')}>点群</button>
                    <button onClick={() => onSelectShape('プロシージャルモデリング')}>プロシージャルモデリング</button>
                    <button onClick={() => onSelectShape('スカルプティング')}>スカルプティング</button>
                    <button onClick={() => onSelectShape('サブディビジョンサーフェス')}>サブディビジョンサーフェス</button>
                    <button onClick={() => onSelectShape('ボリュームモデリング')}>ボリュームモデリング</button>
                    {/* 他の3D高度図形 */}
                </div>
            )}
        </div>
    );
};

export default ThreeDShapeMenu;
