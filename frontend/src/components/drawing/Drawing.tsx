import React, { useState, useEffect, useRef, RefObject } from 'react';

// Define the shape type if you haven't already
interface Shape {
    // Define the properties relevant to your shapes
    // Example: x, y, width, height, color, etc.
}

// ドローイング画面のコンポーネント
const DrawingCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [shapes, setShapes] = useState<Shape[]>([]);

    useEffect(() => {
        // ... (your fetchShapes code remains unchanged)
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

        // キャンバスをクリア
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // 取得した図形のデータをキャンバスに描画
        shapes.forEach(shape => {
            // ToDo: 図形の種類に応じて描画処理を実装（例: 円、四角形など）
        });
    }, [shapes]);

    return (
        <canvas ref={canvasRef} width={800} height={600} />
    );
};

export default DrawingCanvas;
