import React, { useState } from 'react';
import MenuBar from "./components/menubar/MenuBar";
import Toolbar from './components/toolbar/Toolbar';
import GridArea from './components/gridarea/GridArea';
import PropertyEditor from './components/propertyeditor/PropertyEditor';


const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
      <div>
        <MenuBar />
        <Toolbar />
        <GridArea />
        <PropertyEditor />
      </div>
  );
};

export default App;
