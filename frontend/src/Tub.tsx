import React from 'react';

// タブの型定義
interface TabProps {
    name: string;
    active: boolean;
    action: () => void;
}

// タブのコンポーネント
const Tab: React.FC<TabProps> = ({ name, active, action }) => (
    <button className={active ? 'active' : ''} onClick={action}>
        {name}
    </button>
);

export default Tab;
