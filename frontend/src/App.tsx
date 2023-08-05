import React, { useState } from 'react';
import MenuBar from "./MenuBar";
import Toolbar from './Toolbar';
import GridArea from './GridArea';
import PropertyEditor from './PropertyEditor';


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
