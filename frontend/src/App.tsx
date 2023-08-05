import React, { useState } from 'react';
import Toolbar from './Toolbar';
import GridArea from './GridArea';
import PropertyEditor from './PropertyEditor';
import MenuBar from "./MenuBar";

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
