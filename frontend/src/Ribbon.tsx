import React from 'react';

// コマンドボタンの型定義
interface CommandButtonProps {
    name: string;
    action: () => void;
}

// コマンドボタンのコンポーネント
const CommandButton: React.FC<CommandButtonProps> = ({ name, action }) => (
    <button onClick={action}>{name}</button>
);

// リボンの型定義
interface RibbonProps {
    commands: CommandButtonProps[];
}

// リボンのコンポーネント
const Ribbon: React.FC<RibbonProps> = ({ commands }) => (
    <div>
        {commands.map((command, i) => (
            <CommandButton key={i} {...command} />
        ))}
    </div>
);

export default Ribbon;
