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
    onRegisterClick: () => void;
}

const LumberSelection: React.FC<LumberSelectionProps> = ({lumbers, onSelect, onRegisterClick}) => {
    return (
        <div style={{ position: 'relative' }}>
            <select onChange={(e) => onSelect(lumbers[e.target.selectedIndex])}>
                {lumbers.map((lumber, index) => (
                    <option key={index} value={lumber.name}>
                        {lumber.name}
                    </option>
                ))}
            </select>
            <button style={{ position: 'absolute', top: 0, right: 0 }} onClick={onRegisterClick}>登録</button>
        </div>
    );
};

export default LumberSelection;