import React, {useRef, useState, useEffect} from 'react';

const FreeHandDrawingArea: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [path, setPath] = useState<{ x: number; y: number }[]>([]);
    const [lineWidth, setLineWidth] = useState(2);
    const [lineColor, setLineColor] = useState('black');

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        if (!context) return;

        context.lineWidth = lineWidth; // 線の太さ
        context.strokeStyle = lineColor; // 線の色

        const drawPath = () => {
            context.beginPath();
            path.forEach((point, index) => {
                if (index === 0) {
                    context.moveTo(point.x, point.y);
                } else {
                    context.lineTo(point.x, point.y);
                }
            });
            context.stroke();
        };

        drawPath();
    }, [path, lineWidth, lineColor]);

    const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
        setIsDrawing(true);
        setPath([...path, {x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY}]);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
        if (!isDrawing) return;
        setPath([...path, {x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY}]);
    };

    const handleMouseUp = () => {
        setIsDrawing(false);
    };

    return (
        <div>
            <div>
                <label>
                    Line Width:
                    <input
                        type="number"
                        value={lineWidth}
                        onChange={(e) => setLineWidth(Number(e.target.value))}
                    />
                </label>
                <label>
                    Line Color:
                    <input
                        type="color"
                        value={lineColor}
                        onChange={(e) => setLineColor(e.target.value)}
                    />
                </label>
            </div>
            <canvas
                ref={canvasRef}
                width={800}
                height={600}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                className="free-hand-drawing-area"
            />
        </div>
    );
};

export default FreeHandDrawingArea;

