import React, { useState, useEffect } from 'react';
import MaterialRegistration from './MaterialRegistration';
import axios from 'axios'; // axiosを使用してAPIを呼び出します

export interface Material {
    name: string;
    length: number;
    width: number;
    height: number;
}
interface MaterialSelectionProps {
    materials: Material[];
    onSelect: React.Dispatch<React.SetStateAction<Material | null>>;
}

const MaterialSelection: React.FC<MaterialSelectionProps> = ({ materials, onSelect }) => {
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
    const [allMaterials, setAllMaterials] = useState<Material[]>(materials); // ローカルステートを追加

    const handleMaterialRegistration = async (newMaterial: Material) => {
        setIsRegisterModalOpen(false);
        try {
            const response = await axios.post('/path_to_your_api_endpoint', newMaterial); // APIエンドポイントにPOSTリクエストを行います
            const addedMaterial: Material = response.data; // APIから返された新しい材料データ
            setAllMaterials([...allMaterials, addedMaterial]); // 新しい材料をリストに追加
        } catch (error) {
            console.error("Error adding new material:", error);
        }
    };

    useEffect(() => {
        // onSelectをトリガーして選択された材料を親に伝えます。
        // これは、新しい材料が追加された後にリストが自動的に更新されるようにするためのものです。
        onSelect(allMaterials[allMaterials.length - 1]);
    }, [allMaterials]);

    return (
        <div style={{ position: 'relative' }}>
            <select onChange={(e) => onSelect(allMaterials[e.target.selectedIndex])}>
                {allMaterials.map((material, index) => (
                    <option key={index} value={material.name}>
                        {material.name}
                    </option>
                ))}
            </select>
            <button
                style={{ position: 'absolute', top: 0, right: 0 }}
                onClick={() => setIsRegisterModalOpen(true)}
            >
                材料を登録
            </button>
            {isRegisterModalOpen &&
                <MaterialRegistration onRegister={handleMaterialRegistration} />}
        </div>
    );
};

export default MaterialSelection;
