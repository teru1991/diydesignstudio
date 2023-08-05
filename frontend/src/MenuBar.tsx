// MenuBar.tsx
import React from 'react';
import ViewMenu from './ViewMenu';
import EditMenu from './EditMenu';
import FileMenu from './FileMenu';

const MenuBar: React.FC = () => {
    return (
        <div>
            <FileMenu />
            <EditMenu />
            <ViewMenu />
            {/* 他のメニューコンポーネントをここに追加します */}
        </div>
    );
};

export default MenuBar;