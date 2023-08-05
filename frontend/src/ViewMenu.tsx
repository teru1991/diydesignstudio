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

    return (
        <div>
            <button onClick={handleZoomIn}>Zoom In</button>
            <button onClick={handleZoomOut}>Zoom Out</button>
            <button onClick={handleToggleGrid}>{isGridVisible ? 'Hide Grid' : 'Show Grid'}</button>
        </div>
    );
};

export default ViewMenu;
