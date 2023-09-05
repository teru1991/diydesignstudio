import React, {RefObject} from 'react';
import '../../../assets/RibbonMenu.scss';
import { DrawingTools2D, DrawingTools3D, DrawingToolsOther } from '../../DrawingTools/components/DrawingToolButton';
import { EditTools2D, EditTools3D, EditToolsCommon } from '../../EditingTools/components/EditToolButton';
import { AnnotationTools2D, AnnotationTools3D, AnnotationToolsCommon } from '../../Annotations/components/AnnotationToolButton';
import { LayerTools2D, LayerTools3D, LayerToolsCommon } from '../../LayerManagement/components/LayerToolButton'; // LayerToolsのパスを適切に修正してください
import useDropdown from "../../../helpers/useDropdown";

interface ToolData {
    isActive: boolean;
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
    buttonRef: RefObject<HTMLButtonElement>;
    dropdownRef: RefObject<HTMLDivElement>;
}
const HomeMenu = () => {
    const drawingTools = useDropdown();
    const editTools = useDropdown();
    const annotationTools = useDropdown();
    const layerTools = useDropdown();

    const handleButtonClick = (tools:ToolData) => {
        tools.setIsActive(!tools.isActive);
        if (tools.buttonRef.current) {
            const rect = tools.buttonRef.current.getBoundingClientRect();
            if (tools.dropdownRef.current) {
                tools.dropdownRef.current.style.top = `${rect.bottom}px`;
                tools.dropdownRef.current.style.left = `${rect.left}px`;
            }
        }
    };

    return (
        <div className="ribbon-menu">
            <button ref={drawingTools.buttonRef} onClick={() => handleButtonClick(drawingTools)}>
                ドローイングツール
            </button>
            {drawingTools.isActive && (
                <div className="dropdown-menu" ref={drawingTools.dropdownRef}>
                    <div className="tools-section">
                        <h4>2D Tools</h4>
                        <DrawingTools2D />
                    </div>
                    <div className="tools-section">
                        <h4>3D Tools</h4>
                        <DrawingTools3D />
                    </div>
                    <div className="tools-section">
                        <h4>Other Tools</h4>
                        <DrawingToolsOther />
                    </div>
                </div>
            )}

            <button ref={editTools.buttonRef} onClick={() => handleButtonClick(editTools)}>
                編集ツール
            </button>
            {editTools.isActive && (
                <div className="dropdown-menu">
                    <div className="tools-section">
                        <h4>2D Edit Tools</h4>
                        <EditTools2D />
                    </div>
                    <div className="tools-section">
                        <h4>3D Edit Tools</h4>
                        <EditTools3D />
                    </div>
                    <div className="tools-section">
                        <h4>Common Edit Tools</h4>
                        <EditToolsCommon />
                    </div>
                </div>
            )}
            <button ref={annotationTools.buttonRef} onClick={() => handleButtonClick(annotationTools)}>
                注釈ツール
            </button>
            {annotationTools.isActive && (
                <div className="dropdown-menu">
                    <div className="tools-section">
                        <h4>2D Annotation Tools</h4>
                        <AnnotationTools2D />
                    </div>
                    <div className="tools-section">
                        <h4>3D Annotation Tools</h4>
                        <AnnotationTools3D />
                    </div>
                    <div className="tools-section">
                        <h4>Common Annotation Tools</h4>
                        <AnnotationToolsCommon />
                    </div>
                </div>
            )}

            <button ref={layerTools.buttonRef} onClick={() => handleButtonClick(layerTools)}>
                レイヤー管理
            </button>
            {layerTools.isActive && (
                <div className="dropdown-menu">
                    <div className="tools-section">
                        <h4>2D Layer Tools</h4>
                        <LayerTools2D />
                    </div>
                    <div className="tools-section">
                        <h4>3D Layer Tools</h4>
                        <LayerTools3D />
                    </div>
                    <div className="tools-section">
                        <h4>Common Layer Tools</h4>
                        <LayerToolsCommon />
                    </div>
                </div>
            )}
            <button onClick={() => { /* ToDo: Implement Property functionality here */ }}>
                プロパティ
            </button>
            <button onClick={() => { /* ToDo: Implement Group functionality here */ }}>
                グループ
            </button>
            <button onClick={() => { /* ToDo: Implement Block functionality here */ }}>
                ブロック
            </button>
            <button onClick={() => { /* ToDo: Implement Other Utilities functionality here */ }}>
                その他のユーティリティ
            </button>
        </div>
    );
};

export default HomeMenu;
