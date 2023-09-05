import React, { ChangeEvent, useState } from 'react';
import '../styles/QuickAccessToolbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFile, faFolderOpen, faSave, faUndo, faRedo, faPrint, faTimes,
    faCut, faCopy, faPaste, faTrash, faRuler, faFill, faFont,
    faSearchPlus, faSearchMinus, faCog, faLink, faLayerGroup,
    faSquare, faEllipsisH
} from '@fortawesome/free-solid-svg-icons';

type QATButtonAction =
| "NewFile"
    | "OpenFile"
    | "SaveFile"
    | "Undo"
    | "Redo"
    | "Plot"
    | "SaveAs"
    | "CloseDrawing"
    | "Cut"
    | "Copy"
    | "Paste"
    | "Delete"
    | "Dimension"
    | "Hatch"
    | "Text"
    | "ZoomIn"
    | "ZoomOut"
    | "PageSetup"
    | "Xref"
    | "LayerManager"
    | "Block"
    | "OtherCommands";

type QATCommand = {
    name: string;
    action: QATButtonAction;
};

type QuickAccessToolbarProps = {
    commands: QATCommand[];
};

const QuickAccessToolbar: React.FC<QuickAccessToolbarProps> = ({ commands }) => {
    const [showButtons, setShowButtons] = useState<Record<QATButtonAction, boolean>>({
        NewFile: true,
        OpenFile: true,
        SaveFile: true,
        Undo: true,
        Redo: true,
        Plot: true,
        SaveAs: false,
        CloseDrawing: false,
        Cut: false,
        Copy: false,
        Paste: false,
        Delete: false,
        Dimension: false,
        Hatch: false,
        Text: false,
        ZoomIn: false,
        ZoomOut: false,
        PageSetup: false,
        Xref: false,
        LayerManager: false,
        Block: false,
        OtherCommands: false
    });
    const handleButtonClick = (action: QATButtonAction) => {
        console.log(`${action} button clicked`);
        switch (action) {
            case "NewFile":
                // ToDo: 新しいファイルを作成するロジックを追加
                break;
            case "OpenFile":
                // ToDo: ファイルを開くロジックを追加
                break;
            case "SaveFile":
                // ToDo: ファイルを保存するロジックを追加
                break;
            case "Undo":
                // ToDo: 元に戻すロジックを追加
                break;
            case "Redo":
                // ToDo: やり直しロジックを追加
                break;
            case "Plot":
                // ToDo: プリントロジックを追加
                break;
            case "SaveAs":
                // ToDo: 名前を付けて保存するロジックを追加
                break;
            case "CloseDrawing":
                // ToDo: 図面を閉じるロジックを追加
                break;
            case "Cut":
                // ToDo: 切り取りロジックを追加
                break;
            case "Copy":
                // ToDo: コピーのロジックを追加
                break;
            case "Paste":
                // ToDo: 貼り付けロジックを追加
                break;
            case "Delete":
                // ToDo: 削除ロジックを追加
                break;
            case "Dimension":
                // ToDo: 寸法ロジックを追加
                break;
            case "Hatch":
                // ToDo: ハッチロジックを追加
                break;
            case "Text":
                // ToDo: テキストロジックを追加
                break;
            case "ZoomIn":
                // ToDo: ズームインロジックを追加
                break;
            case "ZoomOut":
                // ToDo: ズームアウトロジックを追加
                break;
            case "PageSetup":
                // ToDo: ページセットアップロジックを追加
                break;
            case "Xref":
                // ToDo: 外部参照ロジックを追加
                break;
            case "LayerManager":
                // ToDo: レイヤー管理ロジックを追加
                break;
            case "Block":
                // ToDo: ブロックロジックを追加
                break;
            case "OtherCommands":
                // ToDo: その他のコマンドロジックを追加
                break;
            default:
                // ToDo: その他のコマンドロジックを追加
                break;
        }
    }
    const [showDropdown, setShowDropdown] = useState(false);

    const handleDropdownChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, checked} = e.target;
        setShowButtons(prevState => ({
            ...prevState,
            [name]: checked
        }));
    }
    function getIconForAction(action: QATButtonAction): any {
        switch (action) {
            case "NewFile": return faFile;
            case "OpenFile": return faFolderOpen;
            case "SaveFile": return faSave;
            case "Undo": return faUndo;
            case "Redo": return faRedo;
            case "Plot": return faPrint;
            case "SaveAs": return faSave;
            case "CloseDrawing": return faTimes;
            case "Cut": return faCut;
            case "Copy": return faCopy;
            case "Paste": return faPaste;
            case "Delete": return faTrash;
            case "Dimension": return faRuler;
            case "Hatch": return faFill;
            case "Text": return faFont;
            case "ZoomIn": return faSearchPlus;
            case "ZoomOut": return faSearchMinus;
            case "PageSetup": return faCog;
            case "Xref": return faLink;
            case "LayerManager": return faLayerGroup;
            case "Block": return faSquare;
            case "OtherCommands": return faEllipsisH;
            default: return faEllipsisH;
        }
    }

    function getLabelForAction(action: QATButtonAction): string {
        switch (action) {
            case "NewFile": return "新しいファイル";
            case "OpenFile": return "ファイルを開く";
            case "SaveFile": return "保存";
            case "Undo": return "元に戻す";
            case "Redo": return "やり直し";
            case "Plot": return "プリント";
            case "SaveAs": return "名前を付けて保存";
            case "CloseDrawing": return "図面の閉じる";
            case "Cut": return "切り取り";
            case "Copy": return "コピー";
            case "Paste": return "貼り付け";
            case "Delete": return "削除";
            case "Dimension": return "寸法";
            case "Hatch": return "ハッチ";
            case "Text": return "テキスト";
            case "ZoomIn": return "ズームイン";
            case "ZoomOut": return "ズームアウト";
            case "PageSetup": return "ページセットアップ";
            case "Xref": return "外部参照";
            case "LayerManager": return "レイヤー管理";
            case "Block": return "ブロック";
            case "OtherCommands": return "その他のコマンド";
            default: return "その他のコマンド";
        }
    }

    return (
        <div className="quick-access-toolbar">
            {/* Default Buttons */}
            {showButtons.NewFile && <button onClick={() => handleButtonClick("NewFile")}><FontAwesomeIcon icon={faFile}/></button>}
            {showButtons.OpenFile && <button onClick={() => handleButtonClick("OpenFile")}><FontAwesomeIcon icon={faFolderOpen}/></button>}
            {showButtons.SaveFile && <button onClick={() => handleButtonClick("SaveFile")}><FontAwesomeIcon icon={faSave}/></button>}
            {showButtons.SaveAs && <button onClick={() => handleButtonClick("SaveAs")}><FontAwesomeIcon icon={faSave}/></button>}
            {showButtons.Undo && <button onClick={() => handleButtonClick("Undo")}><FontAwesomeIcon icon={faUndo}/></button>}
            {showButtons.Redo && <button onClick={() => handleButtonClick("Redo")}><FontAwesomeIcon icon={faRedo}/></button>}
            {showButtons.Cut && <button onClick={() => handleButtonClick("Cut")}><FontAwesomeIcon icon={faCut}/></button>}
            {showButtons.Copy && <button onClick={() => handleButtonClick("Copy")}><FontAwesomeIcon icon={faCopy}/></button>}
            {showButtons.Paste && <button onClick={() => handleButtonClick("Paste")}><FontAwesomeIcon icon={faPaste}/></button>}
            {showButtons.Delete && <button onClick={() => handleButtonClick("Delete")}><FontAwesomeIcon icon={faTrash}/></button>}
            {showButtons.Plot && <button onClick={() => handleButtonClick("Plot")}><FontAwesomeIcon icon={faPrint}/></button>}
            {showButtons.CloseDrawing && <button onClick={() => handleButtonClick("CloseDrawing")}><FontAwesomeIcon icon={faTimes}/></button>}
            {showButtons.Text && <button onClick={() => handleButtonClick("Text")}><FontAwesomeIcon icon={faFont}/></button>}
            {showButtons.Dimension && <button onClick={() => handleButtonClick("Dimension")}><FontAwesomeIcon icon={faRuler}/></button>}
            {showButtons.Hatch && <button onClick={() => handleButtonClick("Hatch")}><FontAwesomeIcon icon={faFill}/></button>}
            {showButtons.ZoomIn && <button onClick={() => handleButtonClick("ZoomIn")}><FontAwesomeIcon icon={faSearchPlus}/></button>}
            {showButtons.ZoomOut && <button onClick={() => handleButtonClick("ZoomOut")}><FontAwesomeIcon icon={faSearchMinus}/></button>}
            {showButtons.PageSetup && <button onClick={() => handleButtonClick("PageSetup")}><FontAwesomeIcon icon={faCog}/></button>}
            {showButtons.Xref && <button onClick={() => handleButtonClick("Xref")}><FontAwesomeIcon icon={faLink}/></button>}
            {showButtons.LayerManager && <button onClick={() => handleButtonClick("LayerManager")}><FontAwesomeIcon icon={faLayerGroup}/></button>}
            {showButtons.Block && <button onClick={() => handleButtonClick("Block")}><FontAwesomeIcon icon={faSquare}/></button>}
            {showButtons.OtherCommands && <button onClick={() => handleButtonClick("OtherCommands")}><FontAwesomeIcon icon={faEllipsisH}/></button>}

            {/* Customizable Dropdown */}
            <div className="dropdown">
                <button className="dropdown-button" onClick={() => setShowDropdown(!showDropdown)}><FontAwesomeIcon icon={faCog}/></button>
                <div className={`dropdown-content ${showDropdown ? 'show' : ''}`}>
                    {Object.entries(showButtons).map(([action, isVisible]) => (
                        <label key={action}>
                            <input
                                type="checkbox"
                                name={action}
                                checked={isVisible}
                                onChange={handleDropdownChange}
                            />
                            <FontAwesomeIcon icon={getIconForAction(action as QATButtonAction)}/> {getLabelForAction(action as QATButtonAction)}
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default QuickAccessToolbar;
export type { QATCommand };
