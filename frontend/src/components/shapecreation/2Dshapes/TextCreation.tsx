// TextCreation.tsx
import React, { useState } from 'react';

const TextCreation = ({ onCreateText }) => {
    const [text, setText] = useState('');
    const [position, setPosition] = useState('');

    const handleCreateText = () => {
        // Validation and creation logic here
        // ...

        // Call the onCreateText function with the text parameters
        onCreateText({ text, position });
    };

    return (
        <div>
            {/* Input form for text */}
            <input
                type="text"
                placeholder="Text Content"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <input
                type="text"
                placeholder="Position (x,y)"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
            />
            <button onClick={handleCreateText}>Create Text</button>
        </div>
    );
};

export default TextCreation;
