import React from 'react';

const EditMenu = () => {
    const handleCopy = () => {
        // Copy selected shape here
    };

    const handleCut = () => {
        // Cut selected shape here
    };

    const handlePaste = () => {
        // Paste copied/cut shape here
    };

    return (
        <div>
            <button onClick={handleCopy}>Copy</button>
            <button onClick={handleCut}>Cut</button>
            <button onClick={handlePaste}>Paste</button>
        </div>
    );
};

export default EditMenu;
