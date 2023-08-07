import React, { useState } from 'react';

interface RectangleCreationProps {
    onCreateRectangle: (topLeft: string, bottomRight: string) => void;
}

const RectangleCreation: React.FC<RectangleCreationProps> = ({ onCreateRectangle }) => {
    const [topLeft, setTopLeft] = useState('');
    const [bottomRight, setBottomRight] = useState('');

    const handleCreateRectangle = () => {
        // Validation and creation logic here
        // ...

        // Call the onCreateRectangle function with the rectangle parameters
        onCreateRectangle(topLeft, bottomRight);
    };

    return (
        <div>
            {/* Input form for rectangle */}
            <input
                type="text"
                placeholder="Top Left Point (x1,y1)"
                value={topLeft}
                onChange={(e) => setTopLeft(e.target.value)}
            />
            <input
                type="text"
                placeholder="Bottom Right Point (x2,y2)"
                value={bottomRight}
                onChange={(e) => setBottomRight(e.target.value)}
            />
            <button onClick={handleCreateRectangle}>Create Rectangle</button>
        </div>
    );
};

export default RectangleCreation;
