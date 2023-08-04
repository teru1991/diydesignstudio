// ToolIcon.tsx
import React from 'react';

interface ToolIconProps {
    tool: string;
    selected: boolean;
    onClick: () => void;
}

const ToolIcon: React.FC<ToolIconProps> = ({ tool, selected, onClick }) => {
    return (
        <div
            className={`tool-icon ${selected ? 'selected' : ''}`}
            onClick={onClick}
        >
            {tool}
        </div>
    );
};

export default ToolIcon;