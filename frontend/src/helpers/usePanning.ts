// usePanning.ts
import { useState } from 'react';

const usePanning = () => {
    const [pan, setPan] = useState({ x: 0, y: 0 });

    const handlePan = (dx: number, dy: number) => {
        setPan(prev => ({ x: prev.x + dx, y: prev.y + dy }));
    };

    return { pan, handlePan };
};

export default usePanning;
