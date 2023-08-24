import React, { useState } from 'react';
import '../../assets/RibbonMenu.scss';
import { DrawingTools2D, DrawingTools3D, DrawingToolsOther } from '../drawingtoolbutton/DrawingToolButton';
import { EditTools2D, EditTools3D, EditToolsCommon } from '../edittoolbutton/EditToolButton';
import { AnnotationTools2D, AnnotationTools3D, AnnotationToolsCommon } from '../annotationtoolbutton/AnnotationToolButton';
import { LayerTools2D, LayerTools3D, LayerToolsCommon } from '../layertoolbutton/LayerToolButton'; // LayerToolsのパスを適切に修正してください

const HomeMenu = () => {
    const [activeDropdown, setActiveDropdown] = useState('');

    const handleButtonClick = (dropdownName: 'drawingTools' | 'editTools' | 'annotationTools' | 'layerTools') => {
        if (activeDropdown === dropdownName) {
            setActiveDropdown('');
        } else {
            setActiveDropdown(dropdownName);
        }
    };

    return (
        <div className="ribbon-menu">
            <button onClick={() => handleButtonClick('drawingTools')}>
                ドローイングツール
            </button>
            {activeDropdown === 'drawingTools' && (
                <div className="dropdown-menu">
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

            <button onClick={() => handleButtonClick('editTools')}>
                編集ツール
            </button>
            {activeDropdown === 'editTools' && (
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
            <button onClick={() => handleButtonClick('annotationTools')}>
                注釈ツール
            </button>
            {activeDropdown === 'annotationTools' && (
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
            <button onClick={() => handleButtonClick('layerTools')}>
                レイヤー管理
            </button>
            {activeDropdown === 'layerTools' && (
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
