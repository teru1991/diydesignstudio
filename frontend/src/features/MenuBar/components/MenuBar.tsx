import React, { useState } from 'react';
import QuickAccessToolbar, { QATCommand } from '../../../shared/components/QuickAccessToolbar';
import Ribbon from '../../../shared/components/Ribbon';
import Tub from '../../../shared/components/Tab';
import HomeMenu from './HomeMenu';
import InsertMenu from './InsertMenu';
import AnnotationMenu from "../../Annotations/components/AnnotationMenu";
import DisplayMenu from '../../../components/displaymenu/DisplayMenu';
import OutputMenu from "./OutputMenu";
import ModelingMenu from './ModelingMenu';
import ParametricMenu from './ParametricMenu';
import ThreeDToolsMenu from "./ThreeDToolMenu";
import RenderingMenu from "./RenderingMenu";
import CustomizeMenu from "../../../components/customizemenu/CustomizeMenu";
import MacroMenu from "./MacroMenu";
import SpecificToolsMenu from "./SpecificToolsMenu";
import UserMenu from '../../UserManagement/UserMenu';
import HelpMenu from './HelpMenu';
import SettingsMenu from './SettingsMenu';
import CustomToolbar from '../../../components/customtoolbar/CustomToolBar';
import {ribbonTabs,Command} from "../../../data/RibbonTab";
import '../styles/MenuBar.scss';

interface MenuBarProps {
    setActiveModelingTab: React.Dispatch<React.SetStateAction<'2D' | '3D'>>;
}

const MenuBar: React.FC<MenuBarProps> = ({ setActiveModelingTab }) => {
    const quickCommands: QATCommand[] = [
        { name: 'Undo', action: "Undo" },
        { name: 'Redo', action: "Redo" },
        { name: 'Save', action: "SaveFile" },
        { name: 'Setting', action: "OtherCommands" }, // ここは適切なQATButtonActionに変更する必要があるかもしれません
    ];

    const [currentTab, setCurrentTab] = useState('File');

    let MenuComponent;
    switch (currentTab) {
        case 'ホーム': MenuComponent = HomeMenu; break;
        case '挿入': MenuComponent = InsertMenu; break;
        case '注釈': MenuComponent = AnnotationMenu; break;
        case '表示': MenuComponent = DisplayMenu; break;
        case '出力': MenuComponent = OutputMenu; break;
        case 'Modeling': MenuComponent = ModelingMenu; break;
        case 'パラメトリック': MenuComponent = ParametricMenu; break;
        case '3Dツール': MenuComponent = ThreeDToolsMenu; break;
        case 'レンダリング': MenuComponent = RenderingMenu; break;
        case 'カスタマイズ': MenuComponent = CustomizeMenu; break;
        case 'マクロ': MenuComponent = MacroMenu; break;
        case 'その他': MenuComponent = SpecificToolsMenu; break;
        case 'User': MenuComponent = UserMenu; break;
        case 'Help': MenuComponent = HelpMenu; break;
        case 'Setting': MenuComponent = SettingsMenu; break;
        default: MenuComponent = () => <div>未知のタブです</div>; break;
    }

    const tabs = ribbonTabs.map((tab: { name: string; }, i: number) => ({
        name: tab.name,
        active: currentTab === tab.name,
        action: () => setCurrentTab(tab.name)
    }));

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