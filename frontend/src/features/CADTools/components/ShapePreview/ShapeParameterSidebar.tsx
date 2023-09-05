import React, { useRef, useEffect, useState } from 'react';

interface ShapeParameterSidebarProps {
    shapeData: any; // 選択した図形のデータ
    onUpdate: (updatedData: any) => void; // パラメータが更新されたときのコールバック
}

const ShapeParameterSidebar: React.FC<ShapeParameterSidebarProps> = ({ shapeData, onUpdate }) => {
    // TODO: 図形のパラメータに応じた入力フィールドを動的に生成
    return (
        <div className="shape-parameter-sidebar">
            <h3>図形のパラメータ</h3>
            {/* 選択した図形のパラメータを表示・編集する入力フィールド */}
        </div>
    );
};

export default ShapeParameterSidebar;
