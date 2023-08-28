import React, { useState } from 'react';

// 既存のコンポーネントのインポート
import Shape2DRenderer from "../shaperenderer/Shape2DRenderer/Shape2DRenderer";
import Shape3DRenderer from "../shaperenderer/shape3Drendere/Shape3DRendere";
import ColorPicker from "../common/ColorPicker";
import LineWidthSelector from "../common/LineWidthSelector";
import ParameterInput from "../common/ParameterInput";

interface ShapeBuilderProps {
    // 必要なプロパティをここに定義
}



const ShapeBuilder: React.FC<ShapeBuilderProps> = () => {
    const [mode, setMode] = useState<"2D" | "3D">("2D");
    const [shapeType, setShapeType] = useState<string>('rectangle'); // 例として
    const [shapeData, setShapeData] = useState<any>({});
    const [color, setColor] = useState<string>('#FFFFFF');
    const [lineWidth, setLineWidth] = useState<number>(1);

    return (
        <div>
            <h2>Shape Builder</h2>
            <div>
                <label>
                    Mode:
                    <select value={mode} onChange={(e) => setMode(e.target.value as "2D" | "3D")}>
                        <option value="2D">2D</option>
                        <option value="3D">3D</option>
                    </select>
                </label>
            </div>

            <ColorPicker value={color} onChange={setColor} />
            <LineWidthSelector value={lineWidth} onChange={setLineWidth} />
            {/* 他の入力フォームもここに追加します */}
            <ParameterInput label="Width" value={shapeData.width || ''} onChange={(value) => setShapeData((prev: typeof shapeData) => ({ ...prev, width: value }))} />
            <ParameterInput label="Height" value={shapeData.height || ''} onChange={(value) => setShapeData((prev: typeof shapeData) => ({ ...prev, height: value }))} />

            {/* プレビュー */}
            {mode === "2D" ? (
                <Shape2DRenderer type={shapeType} data={shapeData} color={color} lineWidth={lineWidth} />
            ) : (
                <Shape3DRenderer type={shapeType} data={shapeData} color={color} />
            )}
        </div>
    );
};

export default ShapeBuilder;
