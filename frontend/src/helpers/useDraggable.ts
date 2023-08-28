import React, { useState } from 'react';

interface Position {
    x: number;
    y: number;
}

// ドラッグ可能な機能を提供するカスタムフック
const useDraggable = () => {
    const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setIsDragging(true);
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (isDragging) {
            setPosition({
                x: position.x + e.movementX,
                y: position.y + e.movementY,
            });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    };

    return {
        position,
        handleMouseDown,
    };
};

export default useDraggable;
