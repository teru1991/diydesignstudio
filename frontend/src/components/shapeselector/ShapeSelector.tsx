import React from 'react';

interface ShapeSelectorProps {
    onSelect: (shapeType: string) => void;
}

const ShapeSelector: React.FC<ShapeSelectorProps> = ({ onSelect }) => {
    const handleShapeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedShape = event.target.value;
        onSelect(selectedShape);
    };

    return (
        <div>
            <label htmlFor="shape-select">図形を選択:</label>
            <select id="shape-select" onChange={handleShapeChange}>
                <option value="">-- 図形を選択 --</option> {/* デフォルトの選択オプションを追加 */}
                <option value="rectangle">四角形</option>
                {/* 他の図形のオプションもここに追加します */}
            </select>
        </div>
    );
};

export default ShapeSelector;
