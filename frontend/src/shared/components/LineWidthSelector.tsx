import React from 'react';

interface LineWidthSelectorProps {
  value: number;
  onChange: (width: number) => void;
}

const LineWidthSelector: React.FC<LineWidthSelectorProps> = ({ value, onChange }) => {
  return (
    <div>
      <label>Line Width:</label>
      <select value={value} onChange={e => onChange(Number(e.target.value))}>
        <option value={1}>1px</option>
        <option value={2}>2px</option>
        <option value={3}>3px</option>
        <option value={4}>4px</option>
        {/* 他のオプション */}
      </select>
    </div>
  );
};

export default LineWidthSelector;
