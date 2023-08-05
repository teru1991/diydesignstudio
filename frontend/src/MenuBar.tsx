import React, { useState } from 'react';
import QuickAccessToolbar from './QuickAccessToolbar';
import Ribbon from './Ribbon';
import Tub from './Tub';
import FileMenu from './FileMenu';
import EditMenu from './EditMenu';
import ViewMenu from './ViewMenu';
import './MenuBar.scss';
const MenuBar: React.FC = () => {
    // QuickAccessToolbarのコマンドの定義
    const quickCommands = [
        { name: 'Undo', action: () => console.log('Undo executed') },
        { name: 'Redo', action: () => console.log('Redo executed') },
        { name: 'Save', action: () => console.log('Save executed') },
    ];

    const [currentTab, setCurrentTab] = useState('File');

    const MenuComponent = currentTab === 'File' ? FileMenu :
        currentTab === 'Edit' ? EditMenu :
            ViewMenu ;

    // タブの定義
    const tabs = [
        { name: 'File', active: currentTab === 'File', action: () => setCurrentTab('File') },
        { name: 'Edit', active: currentTab === 'Edit', action: () => setCurrentTab('Edit') },
        { name: 'View', active: currentTab === 'View', action: () => setCurrentTab('View') },
    ];

    return (
        <div>
            <QuickAccessToolbar commands={quickCommands} />
            {tabs.map((tab, i) => (
                <Tub key={i} {...tab} />
            ))}
            <Ribbon MenuComponent={MenuComponent} />

        </div>
    );
};

export default MenuBar;
