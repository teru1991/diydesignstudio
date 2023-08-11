import React, { useState } from 'react';
import MenuBar from "./components/menubar/MenuBar";
import Toolbar from './components/toolbar/Toolbar';
import GridArea from './components/gridarea/GridArea';
import PropertyEditor from './components/propertyeditor/PropertyEditor';
import ModelingMenu from './components/modeling/ModelingMenu';

const App = () => {
    const [showShapeCreation, setShowShapeCreation] = useState(false);
    const [initialTab, setInitialTab] = useState<'3D' | '2D'>('3D'); // 初期値を '3D' としています。

    return (
        <div>
            <MenuBar /> {/* onShapeCreationを削除 */}
            <Toolbar />
            <GridArea showShapeCreation={showShapeCreation} initialTab={initialTab} />
            <PropertyEditor />
        </div>
    );
};

export default App;
