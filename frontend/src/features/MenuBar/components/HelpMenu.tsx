import React from 'react';
import '../../../assets/RibbonMenu.scss';
interface HelpMenuProps {
    // Props type definitions go here
}

const HelpMenu: React.FC<HelpMenuProps> = (props) => {
    // Component logic goes here

    return (
        <div className={"ribbon-menu"}>
            <button onClick={() => console.log("Open Help Document")}>Help Document</button>
            <button onClick={() => console.log("Open Tutorial")}>Tutorial</button>
            <button onClick={() => console.log("Open FAQ")}>FAQ</button>
            <button onClick={() => console.log("About the App")}>About</button>
        </div>
    );
};

export default HelpMenu;
