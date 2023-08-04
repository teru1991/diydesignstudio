import React, { useState } from 'react';
import Toolbar from './Toolbar';
import GridArea from './GridArea';
import PropertyEditor from './PropertyEditor';
import FileMenu from './FileMenu';
import EditMenu from './EditMenu';
import ViewMenu from './ViewMenu';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
      <div>
        <Toolbar />
        <GridArea />
        <PropertyEditor />
        <FileMenu />
        <EditMenu />
        <ViewMenu />
      </div>
  );
};

export default App;
