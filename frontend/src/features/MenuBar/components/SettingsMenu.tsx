import React from 'react';
import '../styles/SettingsMenu.scss';

const SettingsMenu: React.FC = () => {
    const handleSetting = () => {
        // Go to specified location
        console.log('Setting');
    };

    return (
        <div className="settings">
            <button onClick={handleSetting}>Setting</button>
        </div>
    );
};

export default SettingsMenu;
