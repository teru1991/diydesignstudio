import React, { useState, useContext } from 'react';

// Define the type for tool objects
interface Tool {
    id: string;
    name: string;
    icon: string;
}

// Define the type for context values
interface ToolbarContextValues {
    tools: Tool[][];
    resetToDefault: () => void;
}

const ToolbarContext = React.createContext<ToolbarContextValues>({} as ToolbarContextValues);


const Toolbar: React.FC = () => {
    const { tools, resetToDefault } = useContext(ToolbarContext);

    const handleRightClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        // ここで右クリックメニューを表示
    };

    return (
        <div className="toolbar" onContextMenu={handleRightClick}>
            {tools.map((group, index) => (
                <div key={index} className="tool-group">
                    {group.map(tool => (
                        <button key={tool.id}>
                            <img src={tool.icon} alt={tool.name} />
                            {tool.name}
                        </button>
                    ))}
                    {index !== tools.length - 1 && <div className="separator"></div>}
                </div>
            ))}
        </div>
    );
};

const CADToolbarContainer: React.FC = () => {
    const defaultTools = [
        [
            { id: '2d-draw', name: '2D 描画', icon: 'path/to/icon.png' },
            // 他の2Dツール
        ],
        [
            { id: '3d-draw', name: '3D 描画', icon: 'path/to/icon.png' },
            // 他の3Dツール
        ],
        [
            { id: 'common-zoom', name: 'ズーム', icon: 'path/to/icon.png' },
            // 他の共通ツール
        ],
    ];

    const [tools, setTools] = useState(defaultTools);

    const resetToDefault = () => {
        setTools(defaultTools);
    };

    return (
        <ToolbarContext.Provider value={{ tools, resetToDefault }}>
            <Toolbar />
            {/* 他のコンポーネント */}
        </ToolbarContext.Provider>
    );
};

export default CADToolbarContainer;
