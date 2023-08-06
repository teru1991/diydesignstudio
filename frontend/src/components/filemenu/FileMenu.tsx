import React from 'react';
import '../assets/RibbonMenu.scss';

const FileMenu = () => {
    const [isDialogOpen, setIsDialogOpen] = React.useState(false);

    const handleOpen = () => {
        setIsDialogOpen(true);
    };

    const handleClose = () => {
        setIsDialogOpen(false);
    };

    const handleSave = () => {
        // Save project data here
    };

    const handleLoad = () => {
        // Load project data here
    };
    const handleExport = () => {
        console.log('Exporting project...');
    };

    const handleCloseProject = () => {
        console.log('Closing project...');
    };

    const handleNewWindow = () => {
        // Open new window
        console.log('New Window');
    };

    const handlePrint = () => {
        // Print current view
        console.log('Print');
    };

    const handleExit = () => {
        // Exit the application
        console.log('Exit');
    };
    return (
        <div className="ribbon-Menu">
            <button onClick={handleOpen}>New Project</button>
            <button onClick={handleSave}>Save Project</button>
            <button onClick={handleLoad}>Load Project</button>
            <button onClick={handleExport}>Export</button>
            <button onClick={handleCloseProject}>Close Project</button>
            <button onClick={handleNewWindow}>New Window</button>
            <button onClick={handlePrint}>Print</button>
            <button onClick={handleExit}>Exit</button>
            {/*{isDialogOpen && <Dialog onClose={handleClose} />}*/}
        </div>
    );
};

export default FileMenu;
