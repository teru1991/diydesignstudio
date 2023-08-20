import React from 'react';
import './Ribbon.scss';

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
    MenuComponent: React.ComponentType<any>;
}

// リボンのコンポーネント
const Ribbon: React.FC<RibbonProps> = ({ MenuComponent }) => {
    // デバッグのためのログを追加
    console.log("Rendering Ribbon with MenuComponent:", MenuComponent);

    return (
        <div className={"ribbon"}>
            <MenuComponent/>
        </div>
    );
};
export default Ribbon;
