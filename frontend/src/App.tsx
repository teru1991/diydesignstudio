import React, { useState } from 'react';
import MenuBar from "./components/menubar/MenuBar";
import Toolbar from './components/toolbar/Toolbar';
import DrawingCanvas from "./components/drawingcanvas/DrawingCanvas";
import PropertyEditor from './components/propertyeditor/PropertyEditor';
import Rectangle from "./components/shapemenu/shapes/2D/Rectangle";

const App: React.FC = () => {
    const [activeModelingTab, setActiveModelingTab] = useState<'2D' | '3D'>('2D');
    const [initialTab, setInitialTab] = useState<'3D' | '2D'>('3D');

    return (
        <div className="app-container">
            <MenuBar setActiveModelingTab={setActiveModelingTab} />
            <div className="canvas-and-sidebars">
                <DrawingCanvas />
                <PropertyEditor />
            </div>
        </div>
    );
};

export default App;
