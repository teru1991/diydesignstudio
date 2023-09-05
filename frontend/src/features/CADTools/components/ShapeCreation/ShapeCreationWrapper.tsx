import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ColorPicker from "../../../../shared/components/ColorPicker";
import LineWidthSelector from "../../../../shared/components/LineWidthSelector";
import { ShapeParameterInput} from "./ShapeParameterInput";
import ShapeSelector from "./ShapeSelector";
import useSendDataToBackend from "../../../../helpers/useSendDataToBackend";
import MaterialSelection,{Material} from "../../../MaterialManagement/components/MaterualSelection";

interface ShapeCreationWrapperProps {
    onShapeTypeChange: (type: string) => void;
    onShapeDataChange: (data: any) => void;
    // 他のPropsもここに追加できます。
}


const ShapeCreationWrapper: React.FC<ShapeCreationWrapperProps> = ({ onShapeTypeChange, onShapeDataChange }) => {
    const [shapeType, setShapeType] = useState<string>('');
    const [shapeParams, setShapeParams] = useState<any>({});
    const [selectedMaterial, setSelectedMaterial] = useState<Material | null>(null);
    const [color, setColor] = useState<string>('#000000');
    const [lineWidth, setLineWidth] = useState<number>(1);

    const handleShapeParamChange = (params: any) => {
        setShapeParams(params);
    };
    const [depth, setDepth] = useState<number | null>(null); // 材料の深さ

    // カスタムフックを使用してデータ送信のロジックを適用
    useSendDataToBackend(shapeType, shapeParams, selectedMaterial, color, lineWidth, depth);
    const handleShapeCreation = async () => {
        // バックエンドとの通信前のログ
        console.log('Sending data to backend:', shapeType);

        // ここでバックエンドと通信すると仮定します
        const response = await fetch('YOUR_BACKEND_ENDPOINT', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ shapeType})
        });

        const result = await response.json();

        // バックエンドからのレスポンス後のログ
        console.log('Received response from backend:', result);

        // 必要に応じてステートを更新
        onShapeTypeChange(result.shapeType);
        onShapeDataChange(result.shapeData);
    };

    const [materials, setMaterials] = useState<Material[]>([]);

    useEffect(() => {
        // 仮に以下のようなエンドポイントが材料のリストを提供するとします。
        fetch("/materials/list")
            .then(res => res.json())
            .then(data => setMaterials(data))
            .catch(error => console.error("Error fetching materials:", error));
    }, []);

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
            <MaterialSelection materials={materials} onSelect={setSelectedMaterial} />

            {/* ここでshapeParams, color, lineWidth, とselectedMaterialを使用して図形を描画または他の操作を実行 */}
            <input
                type="number"
                placeholder="Height/Depth"
                onChange={(e) => setDepth(Number(e.target.value))}
            />
        </div>
    );
};

export default ShapeCreationWrapper;
