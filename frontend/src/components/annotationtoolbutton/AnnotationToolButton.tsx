import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTextHeight, faRulerVertical, faArrowRight, faFont, faDrawPolygon, faShapes,
    faLayerGroup, faVectorSquare, faCommentDots, faStamp, faFillDrip, faTable,
    faBorderAll, faMapSigns, faPalette, faBezierCurve, faRuler, faRulerHorizontal
} from '@fortawesome/free-solid-svg-icons';

interface AnnotationToolButtonProps {
    iconName: any;
    label: string;
    onClick: () => void;
    displayMode?: 'icon' | 'label' | 'both';
}

const AnnotationToolButton: React.FC<AnnotationToolButtonProps> = ({ iconName, label, onClick, displayMode = 'both' }) => {
    return (
        <button onClick={onClick} title={label}>
            {displayMode === 'icon' || displayMode === 'both' ? <FontAwesomeIcon icon={iconName} /> : null}
            {displayMode === 'label' || displayMode === 'both' ? <span>{label}</span> : null}
        </button>
    );
};

const AnnotationTools2D: React.FC = () => {
    return (
        <div>
            <AnnotationToolButton iconName={faTextHeight} label="テキスト" onClick={() => { /* Implement Text functionality */ }} />
            <AnnotationToolButton iconName={faRulerVertical} label="寸法" onClick={() => { /* Implement Dimension functionality */ }} />
            <AnnotationToolButton iconName={faArrowRight} label="リーダー" onClick={() => { /* Implement Leader functionality */ }} />
            <AnnotationToolButton iconName={faFont} label="テキストスタイル" onClick={() => { /* Implement TextStyle functionality */ }} />
            <AnnotationToolButton iconName={faDrawPolygon} label="寸法スタイル" onClick={() => { /* Implement DimensionStyle functionality */ }} />
            <AnnotationToolButton iconName={faTable} label="テーブル" onClick={() => { /* Implement Table functionality */ }} />
            <AnnotationToolButton iconName={faBorderAll} label="境界" onClick={() => { /* Implement Boundary functionality */ }} />
            <AnnotationToolButton iconName={faMapSigns} label="マルチリーダー" onClick={() => { /* Implement MultiLeader functionality */ }} />
        </div>
    );
};

const AnnotationTools3D: React.FC = () => {
    return (
        <div>
            <AnnotationToolButton iconName={faTextHeight} label="3Dテキスト" onClick={() => { /* Implement 3D Text functionality */ }} />
            <AnnotationToolButton iconName={faRulerVertical} label="3D寸法" onClick={() => { /* Implement 3D Dimension functionality */ }} />
        </div>
    );
};

const AnnotationToolsCommon: React.FC = () => {
    return (
        <div>
            <AnnotationToolButton iconName={faCommentDots} label="ノート" onClick={() => { /* Implement Note functionality */ }} />
            <AnnotationToolButton iconName={faStamp} label="シンボル" onClick={() => { /* Implement Symbol functionality */ }} />
            <AnnotationToolButton iconName={faFillDrip} label="ハッチング" onClick={() => { /* Implement Hatching functionality */ }} />
            <AnnotationToolButton iconName={faPalette} label="カラー" onClick={() => { /* Implement Color functionality */ }} />
            <AnnotationToolButton iconName={faBezierCurve} label="カーブテキスト" onClick={() => { /* Implement CurveText functionality */ }} />
            <AnnotationToolButton iconName={faRuler} label="測定" onClick={() => { /* Implement Measure functionality */ }} />
            <AnnotationToolButton iconName={faRulerHorizontal} label="水平寸法" onClick={() => { /* Implement Horizontal Dimension functionality */ }} />
        </div>
    );
};

export { AnnotationTools2D, AnnotationTools3D, AnnotationToolsCommon };
