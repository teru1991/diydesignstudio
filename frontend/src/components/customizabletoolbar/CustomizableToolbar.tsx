import React, { useState } from 'react';

const CustomizableToolbar: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [tools, setTools] = useState(['2D', '3D', 'Common']);

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        // ドラッグ開始時のロジック
    };

    const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
        // ドラッグ終了時のロジック
    };

    return (
        <div
            className="customizable-toolbar"
            draggable
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            style={{ left: position.x, top: position.y }}
        >
            {tools.map(tool => (
                <button key={tool}>{tool}</button>
            ))}
        </div>
    );
}

export default CustomizableToolbar;
