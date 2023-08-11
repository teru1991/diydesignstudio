import React, {useState} from 'react';

interface ModelingMenuProps {
    onShapeCreation: (tab: '3D' | '2D') => void;
}

const ModelingMenu: React.FC<ModelingMenuProps> = ({onShapeCreation}) => {
    const [selectedTab, setSelectedTab] = useState<'3D' | '2D'>('3D');

    return (
        <div className="ribbon-menu">
            <button onClick={() => {
                setSelectedTab('3D');
                onShapeCreation('3D');
            }}>3D Object Creation
            </button>
            <button onClick={() => {
                setSelectedTab('2D');
                onShapeCreation('2D');
            }}>2D Sketch Creation
            </button>
            {/* 他のボタン */}
        </div>
    );
};

export default ModelingMenu;
