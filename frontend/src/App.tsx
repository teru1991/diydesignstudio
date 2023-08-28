import React, { useState } from 'react';
import MenuBar from "./components/menubar/MenuBar";
import CADWorkspace from "./components/cadworkspace/CADWorkspace";
import PropertyEditor from './components/propertyeditor/PropertyEditor';
import ShapeCreationWrapper from "./components/shapecreationwrapper/ShapeCreationWrapper";

const App: React.FC = () => {
    const [activeModelingTab, setActiveModelingTab] = useState<'2D' | '3D'>('2D');
    const [initialTab, setInitialTab] = useState<'3D' | '2D'>('3D');

    return (
        <div className="app-container">
            <MenuBar setActiveModelingTab={setActiveModelingTab} />
            <div className="canvas-and-sidebars">
                <ShapeCreationWrapper />
                <CADWorkspace />
                <PropertyEditor />
            </div>
        </div>
    );
};

export default App;
