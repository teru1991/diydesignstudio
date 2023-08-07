import React from 'react';
import '../assets/RibbonMenu.scss';

interface ParametricMenuProps {
    // Props type definitions go here
}

const ParametricMenu: React.FC<ParametricMenuProps> = (props) => {
    // Component logic goes here

    return (
        <div className="ribbon-menu">
            <button onClick={() => console.log("Parameter Control")}>Parameter Control</button>
            <button onClick={() => console.log("Part Creation")}>Part Creation</button>
            <button onClick={() => console.log("Part Management")}>Part Management</button>
        </div>
    );
};

export default ParametricMenu;
