import React from 'react';

interface ModelingMenuProps {
    setActiveModelingTab: React.Dispatch<React.SetStateAction<'2D' | '3D' | null>>;
}

const ModelingMenu: React.FC<ModelingMenuProps> = ({ setActiveModelingTab }) => {
    return (
        <div className="ribbon-menu">
            {/* 他のボタンはそのまま保持 */}
            <button onClick={() => console.log("3D Object Editing")}>3D Object Editing</button>
            <button onClick={() => console.log("3D Object Transformation")}>3D Object Transformation</button>
            <button onClick={() => console.log("2D to 3D Conversion")}>2D to 3D Conversion</button>
            <button onClick={() => console.log("Mesh Modeling")}>Mesh Modeling</button>
            <button onClick={() => console.log("Architectural Modeling")}>Architectural Modeling</button>
        </div>
    );
};

export default ModelingMenu;
