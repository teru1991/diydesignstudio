import React from 'react';

export interface Lumber {
    name: string;
    length: number;
    width: number;
    height: number;
}

interface LumberSelectionProps {
    lumbers: Lumber[];
    onSelect: React.Dispatch<React.SetStateAction<Lumber | null>>;

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
