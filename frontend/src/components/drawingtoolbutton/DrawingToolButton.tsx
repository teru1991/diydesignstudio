import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faDrawPolygon, faCircle, faSquare,
    faLayerGroup, faCube, faGlobe, faCut, faFont,
    faArrowsAlt, faObjectUngroup, faObjectGroup,
    faExternalLinkAlt, faClone, faTh, faEyeDropper,
    faPaintBrush, faVectorSquare, faShapes, faRulerCombined
    // 必要に応じて他のアイコンもインポート
} from '@fortawesome/free-solid-svg-icons';

interface DrawingToolButtonProps {
    iconName: any;
    label: string;
    onClick: () => void;
    displayMode?: 'icon' | 'label' | 'both';
}

const DrawingToolButton: React.FC<DrawingToolButtonProps> = ({ iconName, label, onClick, displayMode = 'both' }) => {
    return (
        <button onClick={onClick} title={label}>
            {displayMode === 'icon' || displayMode === 'both' ? <FontAwesomeIcon icon={iconName} /> : null}
            {displayMode === 'label' || displayMode === 'both' ? <span>{label}</span> : null}
        </button>
    );
};

const DrawingTools2D: React.FC = () => {
    return (
        <div>
            <DrawingToolButton iconName={faDrawPolygon} label="Line Tool" onClick={() => { /* ToDo: Implement Line Tool functionality here */ }} />
            <DrawingToolButton iconName={faDrawPolygon} label="Polyline Tool" onClick={() => { /* ToDo: Implement Polyline Tool functionality here */ }} />
            <DrawingToolButton iconName={faCircle} label="Circle Tool" onClick={() => { /* ToDo: Implement Circle Tool functionality here */ }} />
            <DrawingToolButton iconName={faShapes} label="Arc Tool" onClick={() => { /* ToDo: Implement Arc Tool functionality here */ }} />
            <DrawingToolButton iconName={faSquare} label="Rectangle Tool" onClick={() => { /* ToDo: Implement Rectangle Tool functionality here */ }} />
            <DrawingToolButton iconName={faCircle} label="Ellipse Tool" onClick={() => { /* ToDo: Implement Ellipse Tool functionality here */ }} />
            <DrawingToolButton iconName={faPaintBrush} label="Hatch Tool" onClick={() => { /* ToDo: Implement Hatch Tool functionality here */ }} />
            <DrawingToolButton iconName={faFont} label="Text Tool" onClick={() => { /* ToDo: Implement Text Tool functionality here */ }} />
            <DrawingToolButton iconName={faRulerCombined} label="Dimensioning Tools" onClick={() => { /* ToDo: Implement Dimensioning Tools functionality here */ }} />
            <DrawingToolButton iconName={faLayerGroup} label="Layers" onClick={() => { /* ToDo: Implement Layers functionality here */ }} />
            <DrawingToolButton iconName={faObjectGroup} label="Blocks" onClick={() => { /* ToDo: Implement Blocks functionality here */ }} />
            <DrawingToolButton iconName={faCut} label="Trim & Extend Tools" onClick={() => { /* ToDo: Implement Trim & Extend Tools functionality here */ }} />
            <DrawingToolButton iconName={faArrowsAlt} label="Offset Tool" onClick={() => { /* ToDo: Implement Offset Tool functionality here */ }} />
            <DrawingToolButton iconName={faVectorSquare} label="Move, Copy, Rotate, Scale Tools" onClick={() => { /* ToDo: Implement Move, Copy, Rotate, Scale Tools functionality here */ }} />
        </div>
    );
};

const DrawingTools3D: React.FC = () => {
    return (
        <div>
            <DrawingToolButton iconName={faCube} label="Solid Modeling" onClick={() => { /* ToDo: Implement Solid Modeling functionality here */ }} />
            <DrawingToolButton iconName={faGlobe} label="Surface Modeling" onClick={() => { /* ToDo: Implement Surface Modeling functionality here */ }} />
            <DrawingToolButton iconName={faTh} label="Mesh Modeling" onClick={() => { /* ToDo: Implement Mesh Modeling functionality here */ }} />
            <DrawingToolButton iconName={faEyeDropper} label="Visual Style" onClick={() => { /* ToDo: Implement Visual Style functionality here */ }} />
            <DrawingToolButton iconName={faGlobe} label="Rendering" onClick={() => { /* ToDo: Implement Rendering functionality here */ }} />
            <DrawingToolButton iconName={faGlobe} label="3D Navigation" onClick={() => { /* ToDo: Implement 3D Navigation functionality here */ }} />
            <DrawingToolButton iconName={faGlobe} label="Section Plane" onClick={() => { /* ToDo: Implement Section Plane functionality here */ }} />
        </div>
    );
};

const DrawingToolsOther: React.FC = () => {
    return (
        <div>
            <DrawingToolButton iconName={faExternalLinkAlt} label="External Reference" onClick={() => { /* ToDo: Implement External Reference functionality here */ }} />
            <DrawingToolButton iconName={faClone} label="Dynamic Block" onClick={() => { /* ToDo: Implement Dynamic Block functionality here */ }} />
            <DrawingToolButton iconName={faObjectUngroup} label="Array" onClick={() => { /* ToDo: Implement Array functionality here */ }} />
        </div>
    );
};

export { DrawingTools2D, DrawingTools3D, DrawingToolsOther };
