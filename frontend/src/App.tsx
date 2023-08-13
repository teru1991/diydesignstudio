import React, { useState } from 'react';
import MenuBar from "./components/menubar/MenuBar";
import Toolbar from './components/toolbar/Toolbar';
import WorkSpace from './components/workspace/WorkSpace';
import PropertyEditor from './components/propertyeditor/PropertyEditor';

const App: React.FC = () => {
    const [activeModelingTab, setActiveModelingTab] = useState<'2D' | '3D'>('2D');
    const [initialTab, setInitialTab] = useState<'3D' | '2D'>('3D');

    return (
        <div>
            <MenuBar setActiveModelingTab={setActiveModelingTab} />
            <Toolbar />
            <WorkSpace activeModelingTab={activeModelingTab} initialTab={initialTab} />
            <PropertyEditor />
        </div>
    );
};

export default App;
