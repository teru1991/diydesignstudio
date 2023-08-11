import React from 'react';

interface ShapeButtonProps {
  label: string;
  onClick: () => void;
}

const ShapeButton: React.FC<ShapeButtonProps> = ({ label, onClick }) => {
  return (
    <button onClick={onClick}>{label}</button>
  );
};

export default ShapeButton;
