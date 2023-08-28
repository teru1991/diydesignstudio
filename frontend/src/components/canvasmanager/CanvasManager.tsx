
// CanvasManager.jsx
import React, { useState } from 'react';
import DrawingCanvas from "../drawingcanvas/DrawingCanvas";
import ViewingCanvas from "../viewingcanvas/ViewingCanvas";

const CanvasManager = () => {
    const [modelData, setModelData] = useState({ shapes: [] }); // モデルデータのステートを修正
    const [canvases, setCanvases] = useState([<DrawingCanvas key={0} />]); // 複数のDrawingCanvasを管理

    const addCanvas = () => {
        const newCanvas = <DrawingCanvas key={canvases.length} />;
        setCanvases(prev => [...prev, newCanvas]);
    };

    return (
        <div className="canvas-manager">
            <button onClick={addCanvas}>新しいCanvasを追加</button>
            {canvases.map(canvas => canvas)}
            <ViewingCanvas modelData={modelData} />
        </div>
    );
};

export default CanvasManager;