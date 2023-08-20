import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLayerGroup, faLock, faEye, faEyeSlash, faPalette, faTint, faSortAlphaDown, faSortAlphaUp, faSave, faEraser
} from '@fortawesome/free-solid-svg-icons';

interface LayerToolButtonProps {
    iconName: any;
    label: string;
    onClick: () => void;
    displayMode?: 'icon' | 'label' | 'both';
}

const LayerToolButton: React.FC<LayerToolButtonProps> = ({ iconName, label, onClick, displayMode = 'both' }) => {
    return (
        <button onClick={onClick} title={label}>
            {displayMode === 'icon' || displayMode === 'both' ? <FontAwesomeIcon icon={iconName} /> : null}
            {displayMode === 'label' || displayMode === 'both' ? <span>{label}</span> : null}
        </button>
    );
};

const LayerTools2D: React.FC = () => {
    return (
        <div>
            <LayerToolButton iconName={faLayerGroup} label="レイヤー作成" onClick={() => { /* Implement Create Layer functionality */ }} />
            <LayerToolButton iconName={faEraser} label="レイヤー削除" onClick={() => { /* Implement Delete Layer functionality */ }} />
            <LayerToolButton iconName={faLock} label="ロック/アンロック" onClick={() => { /* Implement Lock/Unlock Layer functionality */ }} />
            <LayerToolButton iconName={faEye} label="表示" onClick={() => { /* Implement Show Layer functionality */ }} />
            <LayerToolButton iconName={faEyeSlash} label="非表示" onClick={() => { /* Implement Hide Layer functionality */ }} />
            <LayerToolButton iconName={faPalette} label="色変更" onClick={() => { /* Implement Change Layer Color functionality */ }} />
        </div>
    );
};

const LayerTools3D: React.FC = () => {
    return (
        <div>
            <LayerToolButton iconName={faTint} label="透明度変更" onClick={() => { /* Implement Change Layer Opacity functionality */ }} />
            <LayerToolButton iconName={faLayerGroup} label="材質割り当て" onClick={() => { /* Implement Assign Material to Layer functionality */ }} />
        </div>
    );
};

const LayerToolsCommon: React.FC = () => {
    return (
        <div>
            <LayerToolButton iconName={faSortAlphaDown} label="レイヤー名でソート" onClick={() => { /* Implement Sort Layers by Name functionality */ }} />
            <LayerToolButton iconName={faSortAlphaUp} label="レイヤー属性でソート" onClick={() => { /* Implement Sort Layers by Attribute functionality */ }} />
            <LayerToolButton iconName={faSave} label="レイヤー状態保存" onClick={() => { /* Implement Save Layer State functionality */ }} />
        </div>
    );
};

export { LayerTools2D, LayerTools3D, LayerToolsCommon };
