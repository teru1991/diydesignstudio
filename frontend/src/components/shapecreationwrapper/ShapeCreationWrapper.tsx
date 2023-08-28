import React, { useState } from 'react';
import ShapeSelector from "../shapeselector/ShapeSelector";
import { MaterialSelection, ShapeParameterInput } from "../shapeparameteinput/ShapeParameterInput";
import ShapePreviewWrapper from "../shapepreviewwrapper/ShapePreviewWrapper";

const ShapeCreationWrapper: React.FC = () => {
    const [selectedShape, setSelectedShape] = useState<string | null>(null);

    return (
        <div>
            <h2>図形の作成</h2>

            {/* 図形の選択 */}
            <ShapeSelector onSelect={setSelectedShape} />

            {/* 図形のパラメータ入力 */}
            {selectedShape && <ShapeParameterInput shapeType={selectedShape} />}

            {/* 材料の選択 */}
            <MaterialSelection onSelectLumber={() => {}} /> {/* onSelectLumber プロップスを追加 */}

            {/* 図形のプレビューと「描画」ボタン */}
            <ShapePreviewWrapper shapeType={selectedShape} />
        </div>
    );
};

export default ShapeCreationWrapper;
