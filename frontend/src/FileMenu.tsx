import React from 'react';
// import Dialog from './Dialog';

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

    return (
        <div>
            <button onClick={handleOpen}>New Project</button>
            <button onClick={handleSave}>Save Project</button>
            <button onClick={handleLoad}>Load Project</button>
            {/*{isDialogOpen && <Dialog onClose={handleClose} />}*/}
        </div>
    );
};

export default FileMenu;
