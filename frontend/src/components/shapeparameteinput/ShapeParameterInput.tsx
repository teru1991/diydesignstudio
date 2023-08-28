import React, { useState } from 'react';
import ColorPicker from "../common/ColorPicker";
import LineWidthSelector from "../common/LineWidthSelector";
import LumberSelection from "../lumber/LumberSelection";
import { Lumber } from "../lumber/LumberSelection"; // Lumber型をインポート

interface ShapeParameterInputProps {
    shapeType: string;
}

const ShapeParameterInput: React.FC<ShapeParameterInputProps> = ({ shapeType }) => {
    const [color, setColor] = useState<string>("#000000");
    const [lineWidth, setLineWidth] = useState<number>(1);

    return (
        <div>
            <ColorPicker value={color} onChange={setColor} />
            <LineWidthSelector value={lineWidth} onChange={setLineWidth} />
            {shapeType === 'rectangle' && (
                <>
                    <input placeholder="Width" />
                    <input placeholder="Height" />
                </>
            )}
            {/* 他の図形の入力フォームもここに追加します */}
        </div>
    );
};


interface MaterialSelectionProps {
    onSelectLumber: React.Dispatch<React.SetStateAction<Lumber | null>>; // onSelectをonSelectLumberに変更
}

const MaterialSelection: React.FC<MaterialSelectionProps> = ({ onSelectLumber }) => {
    const [selectedLumber, setSelectedLumber] = useState<Lumber | null>(null); // 初期値をnullで指定
    const lumbers: Lumber[] = []; // Lumber型の配列を指定

    return (
        <div>
            <LumberSelection lumbers={lumbers} onSelect={setSelectedLumber} onRegisterClick={() => { /* 材料の登録処理 */ }} />
            <input placeholder="Height/Depth" />
        </div>
    );
};

export { ShapeParameterInput, MaterialSelection };
