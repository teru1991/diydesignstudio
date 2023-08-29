// CanvasManager.jsx
import React, { useState } from 'react';
import DrawingCanvas from "../drawingcanvas/DrawingCanvas";
import ViewingCanvas from "../viewingcanvas/ViewingCanvas";
import { ModelShape } from "../viewingcanvas/ViewingCanvas"; // Import ModelShape type

const CanvasManager = () => {
    const [modelData, setModelData] = useState<{ shapes: ModelShape[] }>({ shapes: [] }); // Use ModelShape type here
    const [canvases, setCanvases] = useState([<DrawingCanvas key={0} />]);

    const addCanvas = () => {
        const newCanvas = <DrawingCanvas key={canvases.length} />;
        setCanvases(prev => [...prev, newCanvas]);
    };

    const saveShapeToModelData = (shape: ModelShape) => { // Use ModelShape type here
        setModelData(prev => ({ ...prev, shapes: [...prev.shapes, shape] }));
    };

    return (
        <div className="canvas-manager">
            <button onClick={addCanvas}>新しいCanvasを追加</button>
            {/* TODO: Canvas保存ロジックを実装 */}
            <button onClick={() => alert("Canvasを保存します")}>Canvasを保存</button>
            {canvases.map(canvas => canvas)}
            <ViewingCanvas modelData={modelData} />
        </div>
    );
};

export default CanvasManager;
