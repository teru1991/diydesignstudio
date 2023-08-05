import React from 'react';
import './QuickAccessToolbar.scss';

// コマンドボタンの型定義
interface CommandButtonProps {
    name: string;
    action: () => void;
}

// コマンドボタンのコンポーネント
const CommandButton: React.FC<CommandButtonProps> = ({ name, action }) => (
    <button onClick={action}>{name}</button>
);

// クイックアクセスツールバーの型定義
interface QuickAccessToolbarProps {
    commands: CommandButtonProps[];
}

// クイックアクセスツールバーのコンポーネント
const QuickAccessToolbar: React.FC<QuickAccessToolbarProps> = ({ commands }) => (
    <div>
        {commands.map((command, i) => (
            <CommandButton key={i} {...command} />
        ))}
    </div>
);

export default QuickAccessToolbar;
