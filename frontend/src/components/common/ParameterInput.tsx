import React from 'react';

interface ParameterInputProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
}

const ParameterInput: React.FC<ParameterInputProps> = ({ label, value, onChange }) => {
return (
    <div>
      <label>{label}:</label>
      <input type="text" value={value} onChange={e => onChange(e.target.value)} />
    </div>
  );
};

export default ParameterInput;
