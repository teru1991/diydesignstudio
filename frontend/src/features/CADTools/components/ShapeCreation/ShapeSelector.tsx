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
                <option value="">-- 図形を選択 --</option>
                <option value="rectangle">四角形</option>
                <option value="circle">円</option>
                <option value="triangle">三角形</option>
                <option value="ellipse">楕円</option>
                {/* TODO: 更なる図形のオプションを追加 */}
            </select>
        </div>
    );
};

export default ShapeSelector;
