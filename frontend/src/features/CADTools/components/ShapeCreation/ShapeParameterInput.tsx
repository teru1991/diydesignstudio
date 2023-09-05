import React, {useEffect, useState} from 'react';
import ColorPicker from "../../../../shared/components/ColorPicker";
import LineWidthSelector from "../../../../shared/components/LineWidthSelector";

interface ShapeParameterInputProps {
    shapeType: string;
    onChange: (params: any) => void; // Add onChange prop here
}

// ShapeParameterInput.tsx
const ShapeParameterInput: React.FC<ShapeParameterInputProps> = ({ shapeType, onChange }) => {
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




export { ShapeParameterInput};
