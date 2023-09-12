import React, { useState } from 'react';
import MenuBar from "./features/MenuBar/components/MenuBar";
import CADWorkspace from "./features/CADTools/components/CADWorkspace";
import ShapeBuilder from "./features/CADTools/components/ShapeBuilder";
import ShapeSelector from "./features/CADTools/components/ShapeCreation/ShapeSelector";
import TopPage from "./features/TopPage/TopPage";

const App: React.FC = () => {
    const [activeModelingTab, setActiveModelingTab] = useState<'2D' | '3D'>('2D');
    const [initialTab, setInitialTab] = useState<'3D' | '2D'>('3D');

    return (
        <div className="app-container">
            <TopPage isAuthenticated={true}></TopPage>
            <MenuBar setActiveModelingTab={setActiveModelingTab} />
            <ShapeBuilder/>
            <div className="canvas-and-sidebars">
                <CADWorkspace />
            </div>
        </div>
    );
};

export default App;
