import React from 'react';
import '../assets/RibbonMenu.scss';
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
    const handleSelectAll = () => {
        console.log('Selecting all shapes...');
    };

    const handleDeselectAll = () => {
        console.log('Deselecting all shapes...');
    };

    const handleFind = () => {
        // Find text or object
        console.log('Find');
    };

    const handleReplace = () => {
        // Replace text or object
        console.log('Replace');
    };

    const handleGoTo = () => {
        // Go to specified location
        console.log('Go To');
    };
    return (
        <div className="ribbon-menu">
            <button onClick={handleCopy}>Copy</button>
            <button onClick={handleCut}>Cut</button>
            <button onClick={handlePaste}>Paste</button>
            <button onClick={handleSelectAll}>Select All</button>
            <button onClick={handleDeselectAll}>Deselect All</button>
            <button onClick={handleFind}>Find</button>
            <button onClick={handleReplace}>Replace</button>
            <button onClick={handleGoTo}>Go To</button>
        </div>
    );
};

export default EditMenu;
