import React from 'react';

interface ColorPickerProps {
  value: string;
  onChange: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ value, onChange }) => {
  return (
    <div>
      <label>Color:</label>
      <input type="color" value={value} onChange={e => onChange(e.target.value)} />
    </div>
  );
};

export default ColorPicker;
