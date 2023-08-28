import React, { useState } from 'react';
import PartProperties from "../partproperties/PartPrppaerties";

interface Part {
    id: number;
    name: string;
    relatedShapes: string[];
    relatedLayers: string[];
}

const PartManager: React.FC = () => {
    const [parts, setParts] = useState<Part[]>([
        { id: 1, name: "Part1", relatedShapes: ["Shape1"], relatedLayers: ["Layer1"] },
        // ... other parts
    ]);

    const handlePartNameChange = (index: number, newName: string) => {
        const newParts = [...parts];
        newParts[index].name = newName;
        setParts(newParts);
    };

    return (
        <div className="part-manager">
            <h3>Parts</h3>
            <ul>
                {parts.map((part, index) => (
                    <li key={part.id}>
                        <input
                            type="text"
                            value={part.name}
                            onChange={e => handlePartNameChange(index, e.target.value)}
                        />
                        <div>Related Shapes: {part.relatedShapes.join(', ')}</div>
                        <div>Related Layers: {part.relatedLayers.join(', ')}</div>
                    </li>
                ))}
            </ul>
            <PartProperties />
        </div>
    );
}

export default PartManager;
