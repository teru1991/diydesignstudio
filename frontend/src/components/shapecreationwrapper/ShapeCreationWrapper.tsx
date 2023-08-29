import React, { useState } from 'react';
import ColorPicker from "../common/ColorPicker";
import LineWidthSelector from "../common/LineWidthSelector";
import { ShapeParameterInput, MaterialSelection } from "../shapeparameteinput/ShapeParameterInput";
import ShapeSelector from "../shapeselector/ShapeSelector";

// Import the 'Lumber' type if it's defined in your code
import { Lumber } from "../material/MaterualSelection";

const ShapeCreationWrapper: React.FC = () => {
    const [shapeType, setShapeType] = useState<string>('');
    const [shapeParams, setShapeParams] = useState<any>({});
    const [selectedLumber, setSelectedLumber] = useState<Lumber | null>(null);
    const [color, setColor] = useState<string>('#000000');
    const [lineWidth, setLineWidth] = useState<number>(1);

    const handleShapeParamChange = (params: any) => {
        setShapeParams(params);
    };

    return (
        <div>
            <h2>Shape Builder</h2>

            {/* 図形の選択 */}
            <ShapeSelector onSelect={setShapeType} />

            {/* 色の選択 */}
            <ColorPicker value={color} onChange={setColor} />

            {/* 線の太さの選択 */}
            <LineWidthSelector value={lineWidth} onChange={setLineWidth} />

            {/* 図形のパラメータの入力 */}
            {shapeType && <ShapeParameterInput shapeType={shapeType} onChange={handleShapeParamChange} />}

            {/* 材料の選択 */}
            <MaterialSelection onSelectLumber={setSelectedLumber} />

            {/* ここでshapeParams, color, lineWidth, とselectedLumberを使用して図形を描画または他の操作を実行 */}
        </div>
    );
};

export default ShapeCreationWrapper;
