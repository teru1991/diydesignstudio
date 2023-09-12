import React, {useEffect, useState} from 'react';
import ColorPicker from "../../../../shared/components/ColorPicker";
import LineWidthSelector from "../../../../shared/components/LineWidthSelector";


interface ShapeParameters {
    color: string;
    lineWidth: number;
    width?: number;       // added width
    height?: number;      // added height for rectangle and triangle
    radius?: number;      // added radius
    base?: number;        // added base for triangle
    // Add other shape-specific properties here as needed
}



interface ShapeParameterInputProps {
    shapeType: string;
    onChange: (params: any) => void; // Add onChange prop here
}

const initialShapeParameters: ShapeParameters = {
    color: '#000000',
    lineWidth: 1,
    // Initialize other shape-specific properties here as needed
};

// ShapeParameterInput.tsx
const ShapeParameterInput: React.FC<ShapeParameterInputProps> = ({ shapeType, onChange }) => {
    const [color, setColor] = useState<string>(initialShapeParameters.color);
    const [lineWidth, setLineWidth] = useState<number>(initialShapeParameters.lineWidth);
    const [params, setParams] = useState<ShapeParameters>(initialShapeParameters);

    useEffect(() => {
        onChange(params);
    }, [params]);

    const handleInputChange = (key: keyof ShapeParameters, value: number) => {
        setParams((prevState) => ({ ...prevState, [key]: value }));
    };


    return (
        <div>
            <ColorPicker value={color} onChange={setColor} />
            <LineWidthSelector value={lineWidth} onChange={setLineWidth} />
            {shapeType === 'rectangle' && (
                <>
                    <input placeholder="Width" onChange={(e) => handleInputChange("width", Number(e.target.value))} />
                    <input placeholder="Height" onChange={(e) => handleInputChange("height", Number(e.target.value))} />
                </>
            )}
            {shapeType === 'circle' && (
                <input placeholder="Radius" onChange={(e) => handleInputChange("radius", Number(e.target.value))} />
            )}
            {shapeType === 'triangle' && (
                <>
                    <input placeholder="Base" onChange={(e) => handleInputChange("base", Number(e.target.value))} />
                    <input placeholder="Height" onChange={(e) => handleInputChange("height", Number(e.target.value))} />
                </>
            )}
        </div>
    );
};




export { ShapeParameterInput};
