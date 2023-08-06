import React, { useState } from 'react';
import QuickAccessToolbar from '../quickaccesstoolbar/QuickAccessToolbar';
import Ribbon from '../ribbon/Ribbon';
import Tub from '../tub/Tub';
import FileMenu from '../filemenu/FileMenu';
import EditMenu from '../editmenu/EditMenu';
import ViewMenu from '../viewmenu/ViewMenu';
import ModelingMenu from "../modeling/ModelingMenu";
import ParametricMenu from "../parametric/ParametricMenu";
import UserMenu from "../user/UserMenu";
import HelpMenu from "../helpmenu/HelpMenu";
import SettingsMenu from "../setting/SettingsMenu";
import CustomToolbar from "../customtoolbar/CustomToolBar";
import './MenuBar.scss';

const MenuBar: React.FC = () => {
    // QuickAccessToolbarのコマンドの定義
    const quickCommands = [
        { name: 'Undo', action: () => console.log('Undo executed') },
        { name: 'Redo', action: () => console.log('Redo executed') },
        { name: 'Save', action: () => console.log('Save executed') },
        { name: 'Setting', action: () => console.log('Setting executed') },
    ];

    const [currentTab, setCurrentTab] = useState('File');

    let MenuComponent;
    switch (currentTab) {
        case 'File':
            MenuComponent = FileMenu;
            break;
        case 'Edit':
            MenuComponent = EditMenu;
            break;
        case 'View':
            MenuComponent = ViewMenu;
            break;
        case 'Modeling':
            MenuComponent = ModelingMenu;
            break;
        case 'Parametric':
            MenuComponent = ParametricMenu;
            break;
        case 'User':
            MenuComponent = UserMenu;
            break;
        case 'Help':
            MenuComponent = HelpMenu;
            break;
        case 'Setting':
            MenuComponent = SettingsMenu;
            break;
        default:
            MenuComponent = () => null;
            break;
    }
    // タブの定義
    const tabs = [
        { name: 'File', active: currentTab === 'File', action: () => setCurrentTab('File') },
        { name: 'Edit', active: currentTab === 'Edit', action: () => setCurrentTab('Edit') },
        { name: 'View', active: currentTab === 'View', action: () => setCurrentTab('View') },
        { name: 'Modeling', active: currentTab === 'Modeling', action: () => setCurrentTab('Modeling') },
        { name: 'Parametric', active: currentTab === 'Parametric', action: () => setCurrentTab('Parametric') },
        { name: 'User', active: currentTab === 'User', action: () => setCurrentTab('User') },
        { name: 'Help', active: currentTab === 'Help', action: () => setCurrentTab('Help') },
        { name: 'Setting', active: currentTab === 'Setting', action: () => setCurrentTab('Setting') },
    ];

    return (
        <div className="menu-bar">
            <QuickAccessToolbar commands={quickCommands} />
            <div className="tabs-container">
                {tabs.map((tab, i) => (
                    <Tub key={i} {...tab} />
                ))}
            </div>
            <Ribbon MenuComponent={MenuComponent} />
            <CustomToolbar />

        </div>
    );
};

export default MenuBar;
