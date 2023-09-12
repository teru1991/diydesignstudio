import React, {useEffect, useState} from 'react';
import axios from 'axios';
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
    useEffect(() => {
        if (selectedMaterial) {
            setDepth(selectedMaterial.height); // 材料が選択されたら、材料の高さを深さとして設定
        }
    }, [selectedMaterial]);
    // カスタムフックを使用してデータ送信のロジックを適用
    useSendDataToBackend(shapeType, shapeParams, selectedMaterial, color, lineWidth, depth);
    useEffect(() => {
        // 入力が完了しているか確認
        const isInputComplete = () => {
            if (!shapeType || Object.keys(shapeParams).length === 0 || !color || !lineWidth) return false;
            if (selectedMaterial) {
                return true; // 材料が選択されていれば、入力は完了している
            }
            return depth !== null; // 材料が選択されていない場合、depthが必要です
        };

        // 入力が完了している場合、データをバックエンドに送信
        if (isInputComplete()) {
            handleShapeCreation();
        }
    }, [shapeType, shapeParams, selectedMaterial, color, lineWidth, depth]);

    const handleShapeCreation = async () => {
        console.log('Sending data to backend:', shapeType);

        // `/create-shape` エンドポイントにデータを送信します
        const response = await fetch('/create-shape', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ shapeType, shapeParams, selectedMaterial, color, lineWidth, depth })
        });

        const result = await response.json();

        console.log('Received response from backend:', result);

        onShapeTypeChange(result.shapeType);
        onShapeDataChange(result.shapeData);
    };

    const [materials, setMaterials] = useState<Material[]>([]);

    useEffect(() => {
        fetch("/materials/list")
            .then(res => {
                // Check if the response is OK (status code in the range 200-299)
                if (!res.ok) {
                    throw new Error(`Failed to fetch materials with status code: ${res.status}`);
                }
                return res.json();
            })
            .then(data => setMaterials(data))
            .catch(error => console.error("Error fetching materials:", error));
    }, []);

    return (
        <div>
            <h2>Shape Builder</h2>

            {/* 図形の選択 */}
            <ShapeSelector onSelect={setShapeType} />

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
