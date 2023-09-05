// MaterialSelection.tsx
import React, { useState } from 'react';
import MaterialRegistration from './MaterialRegistration';

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

    const handleMaterialRegistration = (newMaterial: Material) => {
        setIsRegisterModalOpen(false);
        // 新しく登録された材料をmaterialsに追加するなどの処理をここで行うことができます。
        // 例: setMaterials([...materials, newMaterial]);
    };

    return (
        <div style={{ position: 'relative' }}>
            <select onChange={(e) => onSelect(materials[e.target.selectedIndex])}>
                {materials.map((material, index) => (
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
