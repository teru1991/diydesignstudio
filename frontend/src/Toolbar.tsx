// Toolbar.tsx
import React, { useState } from 'react';
import ToolIcon from './ToolIcon';

const Toolbar = () => {
    const [selectedTool, setSelectedTool] = useState<string>('select');

    return (
        <div>
            <ToolIcon tool="select" selected={selectedTool === 'select'} onClick={() => setSelectedTool('select')} />
            <ToolIcon tool="draw" selected={selectedTool === 'draw'} onClick={() => setSelectedTool('draw')} />
            {/* More ToolIcon components as needed */}
        </div>
    );
};

export default Toolbar;
export {};