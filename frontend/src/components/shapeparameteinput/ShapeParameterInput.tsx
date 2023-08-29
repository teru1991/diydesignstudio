import React, {useEffect, useState} from 'react';
import ColorPicker from "../common/ColorPicker";
import LineWidthSelector from "../common/LineWidthSelector";
import LumberSelection from "../material/MaterualSelection";
import { Lumber } from "../material/MaterualSelection";

interface ShapeParameterInputProps {
    shapeType: string;
    onChange: (params: any) => void; // Add onChange prop here
}

// ShapeParameterInput.tsx
const ShapeParameterInput: React.FC<ShapeParameterInputProps> = ({ shapeType, onChange }) => {
    const [color, setColor] = useState<string>("#000000");
    const [lineWidth, setLineWidth] = useState<number>(1);
    const [width, setWidth] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);

    useEffect(() => {
        onChange({
            color,
            lineWidth,
            width,
            height,
            // 他の図形のパラメータもここに追加
        });
    }, [color, lineWidth, width, height]);

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
            {shapeType === 'circle' && (
                <input placeholder="Radius" />
            )}
            {shapeType === 'triangle' && (
                <>
                    <input placeholder="Base" />
                    <input placeholder="Height" />
                </>
            )}
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
