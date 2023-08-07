import React, { useState } from 'react';
import '../assets/RibbonMenu.scss';
interface ModelingMenuProps {
    onShapeCreation: (tab: '3D' | '2D') => void;
}


const ModelingMenu: React.FC<ModelingMenuProps> = ({ onShapeCreation }) => {
    return (
        <div className="ribbon-menu">
            <button onClick={() => onShapeCreation('3D')}>3D Object Creation</button>
            <button onClick={() => console.log("3D Object Editing")}>3D Object Editing</button>
            <button onClick={() => console.log("3D Object Transformation")}>3D Object Transformation</button>
            <button onClick={() => onShapeCreation('2D')}>2D Sketch Creation</button>
            <button onClick={() => console.log("2D to 3D Conversion")}>2D to 3D Conversion</button>
            <button onClick={() => console.log("Mesh Modeling")}>Mesh Modeling</button>
            <button onClick={() => console.log("Architectural Modeling")}>Architectural Modeling</button>
        </div>
    );
};

export default ModelingMenu;
