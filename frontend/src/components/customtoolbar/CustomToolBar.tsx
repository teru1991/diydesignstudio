import React, { useState } from 'react';
import './CustomToolbar.scss';

const CustomToolbar = () => {
    const availableButtons = ['Button5', 'Button6', 'Button7', 'Button8'];
    const [currentButtons, setCurrentButtons] = useState(['Button1', 'Button2', 'Button3', 'Button4']);
    const [selectedAvailable, setSelectedAvailable] = useState<string | null>(null);
    const [selectedCurrent, setSelectedCurrent] = useState<string | null>(null);
    const [showSettings, setShowSettings] = useState(false);
    const [backupButtons, setBackupButtons] = useState(currentButtons);
    const [availableButtonsState, setAvailableButtons] = useState<string[]>(availableButtons);
    const [draggingIndex, setDraggingIndex] = useState<number | null>(null);

    const handleSelectAvailable = (button: string) => {
        setSelectedAvailable(button);
        setSelectedCurrent(null);
    };

    const handleSelectCurrent = (button: string) => {
        setSelectedCurrent(button);
        setSelectedAvailable(null);
    };

    const handleAddButton = () => {
        if (selectedAvailable && !currentButtons.includes(selectedAvailable)) {
            setCurrentButtons((prevButtons) => [...prevButtons, selectedAvailable]);
            setSelectedAvailable(null);
            // Remove selected button from availableButtons
            setAvailableButtons((prevButtons) => prevButtons.filter((button) => button !== selectedAvailable));
        }
    };


    const handleRemoveButton = () => {
        if (selectedCurrent) {
            setCurrentButtons((prevButtons) => prevButtons.filter((button) => button !== selectedCurrent));
            setAvailableButtons((prevButtons) => [...prevButtons, selectedCurrent]); // Add selected button to availableButtons
            setSelectedCurrent(null);
        }
    };

    const handleSettingsClick = () => {
        if (!showSettings) {
            setBackupButtons(prev => [...prev]);
        }
        setShowSettings(prev => !prev);
    };
    const handleDragStart = (event: React.DragEvent<HTMLDivElement>, index: number) => {
        event.dataTransfer.setData('text/plain', index.toString());
        setDraggingIndex(index);
    };


    const handleDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>, dropIndex: number) => {
        event.preventDefault();
        const dragIndex = Number(event.dataTransfer.getData('text/plain'));
        if (dragIndex !== null && dragIndex !== dropIndex) { // Check for null first
            const updatedButtons = [...currentButtons];
            const [removed] = updatedButtons.splice(dragIndex, 1);
            updatedButtons.splice(dropIndex, 0, removed);
            setCurrentButtons(updatedButtons);
        }

        setDraggingIndex(null);
    };

    const handleSave = () => {
        setShowSettings(false);
    };

    const handleCancel = () => {
        setCurrentButtons(backupButtons);
        const resetAvailableButtons = availableButtons.filter(button => !backupButtons.includes(button));
        setAvailableButtons(resetAvailableButtons);
        setShowSettings(false);
    };

    return (
        <div className="custom-toolbar">
            <button onClick={handleSettingsClick}>Settings</button>
            {showSettings && (
                <div className="settings-popup">
                    <h2>Custom Toolbar Settings</h2>
                    <div className="settings">
                        <div className="list-section">
                            <div className="list">
                                <h4>Available</h4>
                                {availableButtonsState.map((button, index) => ( // Use availableButtonsState instead of availableButtons
                                    <div key={index} onClick={() => handleSelectAvailable(button)}>
                                        <label htmlFor={button}>{button}</label>
                                    </div>
                                ))}
                            </div>
                            <div className="controls">
                                <button onClick={handleAddButton}>Add</button>
                                <button onClick={handleRemoveButton}>Remove</button>
                            </div>
                            <div className="list">
                                <h4>Current</h4>
                                {currentButtons.map((button, index) => (
                                    <div key={index} onClick={() => handleSelectCurrent(button)}>
                                        <label htmlFor={button}>{button}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="action-buttons">
                            <button onClick={handleSave}>Save</button>
                            <button onClick={handleCancel}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
            <div className="toolbar">
                {currentButtons.map((button, index) => (
                    <div
                        key={button}
                        className="draggable-item"
                        draggable
                        onDragStart={(e) => handleDragStart(e, index)}
                        onDragEnter={(e) => e.preventDefault()}
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={(e) => handleDrop(e, index)}
                    >
                        {button}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomToolbar;
