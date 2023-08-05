import React from 'react';

const ViewMenu = () => {
    const [zoomLevel, setZoomLevel] = React.useState(1);
    const [isGridVisible, setIsGridVisible] = React.useState(true);

    const handleZoomIn = () => {
        setZoomLevel(prevZoomLevel => prevZoomLevel + 0.1);
    };

    const handleZoomOut = () => {
        setZoomLevel(prevZoomLevel => prevZoomLevel - 0.1);
    };

    const handleToggleGrid = () => {
        setIsGridVisible(prevIsGridVisible => !prevIsGridVisible);
    };

    const handleRotateView = () => {
        console.log('Rotating view...');
    };

    const handleResetView = () => {
        console.log('Resetting view...');
    };
    const handleZoomToFit = () => {
        // Adjust view to fit the screen
        console.log('Zoom to Fit');
    };

    const handleFullscreen = () => {
        // Switch to fullscreen mode
        console.log('Fullscreen');
    };

    return (
        <div>
            <button onClick={handleZoomIn}>Zoom In</button>
            <button onClick={handleZoomOut}>Zoom Out</button>
            <button onClick={handleToggleGrid}>{isGridVisible ? 'Hide Grid' : 'Show Grid'}</button>
            <button onClick={handleRotateView}>Rotate View</button>
            <button onClick={handleResetView}>Reset View</button>
            <button onClick={handleZoomToFit}>Zoom to Fit</button>
            <button onClick={handleFullscreen}>Fullscreen</button>
        </div>
    );
};

export default ViewMenu;
