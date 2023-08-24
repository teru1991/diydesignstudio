
import React, { useRef, useEffect, useState } from 'react';
import withZoom from "../HOC/withZoom";
import usePanning from "../../helpers/usePanning";
import useSnap from "../../helpers/useSnap";
import axios from 'axios';

interface DrawingCanvasProps {
    // 他の必要なプロパティをここに追加します。
}
type ShapeDataType = {
    shape_type: string;
    length: number;
    width: number;
    depth: number | null;
    color: string;
    line_width: number;
};

const DrawingCanvas: React.FC<DrawingCanvasProps> = (props) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { pan, handlePan } = usePanning();
    const snapToGrid = useSnap(5);

    const handleMouseMove = (e: React.MouseEvent) => {
        const dx = e.movementX;
        const dy = e.movementY;
        handlePan(dx, dy);
    };

    const handleMouseUp = (e: React.MouseEvent) => {
        // snapToGridの呼び出しをコメントアウトして、グリッドの強制追従を解除します。
        // const { x, y } = snapToGrid(e.clientX - pan.x, e.clientY - pan.y);
        const x = e.clientX - pan.x;
        const y = e.clientY - pan.y;
        // x, yはスナップされた座標です。これを使用して図形を配置します。
    };

    const drawGrid = (ctx: CanvasRenderingContext2D, step: number) => {
        for (let x = 0; x < ctx.canvas.width; x += step) {
            ctx.moveTo(x, 0);
            ctx.lineTo(x, ctx.canvas.height);
        }
        for (let y = 0; y < ctx.canvas.height; y += step) {
            ctx.moveTo(0, y);
            ctx.lineTo(ctx.canvas.width, y);
        }
        ctx.strokeStyle = '#ddd'; // グリッドの色
        ctx.stroke();
    };


    const [length, setLength] = useState<number>(100); // 仮の初期値
    const [width, setWidth] = useState<number>(100); // 仮の初期値
    const [depth, setDepth] = useState<number | null>(null); // 仮の初期値
    const [rectColor, setRectColor] = useState<string>("#FFFFFF"); // 仮の初期値
    const [rectLineWidth, setRectLineWidth] = useState<number>(1); // 仮の初期値

    const handleDrawShape = async () => {
        // 図形データをAPIに送信して保存します。
        const shapeData = {
            shape_type: "rectangle", // この例では四角形を使用
            length: length,
            width: width,
            depth: depth,
            color: rectColor,
            line_width: rectLineWidth,
        };
        try {
            const response = await axios.post('/api/save_shape', shapeData);
            if (response.status === 200) {
                // 図形データが正常に保存された場合、ドローイング画面に図形を表示します。
                drawShapeOnCanvas(shapeData);
            } else {
                console.error("Error saving shape data");
            }
        } catch (error) {
            console.error("Error saving shape data:", error);
        }
    };

    const drawShapeOnCanvas = (shapeData: ShapeDataType) => {
        // ここでcanvasに図形を描画します。
        // 例: ctx.fillRect(0, 0, shapeData.length, shapeData.width);
    };

    const [history, setHistory] = useState<any[]>([]);
    const [currentStep, setCurrentStep] = useState(-1);

    const saveToHistory = (data: any) => {
        setHistory((prevHistory) => {
            const newHistory = prevHistory.slice(0, currentStep + 1);
            newHistory.push(data);
            return newHistory;
        });
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const undo = () => {
        if (currentStep > 0) {
            setCurrentStep((prevStep) => prevStep - 1);
            // ここでcanvasを前の状態に戻します。
        }
    };

    const redo = () => {
        if (currentStep < history.length - 1) {
            setCurrentStep((prevStep) => prevStep + 1);
            // ここでcanvasを次の状態に進めます。
        }
    };
    const [showGrid, setShowGrid] = useState<boolean>(true);
    const toggleGrid = () => {
        setShowGrid(!showGrid);
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext('2d');
            if (ctx) {
                ctx.clearRect(0, 0, canvas.width, canvas.height); // キャンバスをクリア
                if (showGrid) {
                    drawGrid(ctx, 5); // 5はグリッドのサイズです。
                }
                // 他の描画ロジックをここに追加します。
            }
        }
    }, [showGrid]);



    return (
        <div className="drawing-canvas-container">
            <div style={{ transform: `translate(${pan.x}px, ${pan.y}px)` }}>
                <canvas ref={canvasRef} />
            </div>
            <button onClick={undo}>Undo</button>
            <button onClick={redo}>Redo</button>
            <button onClick={toggleGrid}>
                {showGrid ? "グリッドを非表示" : "グリッドを表示"}
            </button>
        </div>
    );

};

export default withZoom(DrawingCanvas);

