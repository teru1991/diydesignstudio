import React from 'react';

interface Lumber {
    name: string;
    length: number;
    width: number;
    height: number;
}

interface LumberSelectionProps {
    lumbers: Lumber[];
    onSelect: (lumber: Lumber) => void;
}

const LumberSelection: React.FC<LumberSelectionProps> = ({lumbers, onSelect}) => {
    return (
        <div>
            <select onChange={(e) => onSelect(lumbers[e.target.selectedIndex])}>
                {lumbers.map((lumber, index) => (
                    <option key={index} value={lumber.name}>
                        {lumber.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default LumberSelection;
