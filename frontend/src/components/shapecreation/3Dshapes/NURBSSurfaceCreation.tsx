import React, { useState } from 'react';

interface NURBSSurfaceCreationProps {
    onCreate: (controlPoints: number[][][], knotsU: number[], knotsV: number[]) => void;
}

const NURBSSurfaceCreation: React.FC<NURBSSurfaceCreationProps> = ({ onCreate }) => {
    const [controlPoints, setControlPoints] = useState<number[][][]>([
        [[0, 0, 0], [1, 0, 0], [2, 0, 0]],
        [[0, 1, 0], [1, 1, 2], [2, 1, 0]],
        [[0, 2, 0], [1, 2, 0], [2, 2, 0]],
    ]);
    const [knotsU, setKnotsU] = useState<number[]>([0, 0, 0, 1, 1, 1]);
    const [knotsV, setKnotsV] = useState<number[]>([0, 0, 1, 1]);

    const handleCreate = () => {
        onCreate(controlPoints, knotsU, knotsV);
    };

    const handleControlPointChange = (row: number, col: number, coordinate: 'x' | 'y' | 'z', value: number) => {
        const updatedControlPoints = [...controlPoints];
        updatedControlPoints[row] = [...controlPoints[row]];
        updatedControlPoints[row][col] = [...controlPoints[row][col]];
        switch (coordinate) {
            case 'x':
                updatedControlPoints[row][col][0] = value;
                break;
            case 'y':
                updatedControlPoints[row][col][1] = value;
                break;
            case 'z':
                updatedControlPoints[row][col][2] = value;
                break;
            default:
                break;
        }
        setControlPoints(updatedControlPoints);
    };

    const handleKnotsUChange = (index: number, value: number) => {
        const updatedKnotsU = [...knotsU];
        updatedKnotsU[index] = value;
        setKnotsU(updatedKnotsU);
    };

    const handleKnotsVChange = (index: number, value: number) => {
        const updatedKnotsV = [...knotsV];
        updatedKnotsV[index] = value;
        setKnotsV(updatedKnotsV);
    };

    return (
        <div>
            <h3>NURBS曲面</h3>
            <div>
                {controlPoints.map((row, rowIndex) => (
                    <div key={rowIndex}>
                        {row.map((point, colIndex) => (
                            <div key={colIndex}>
                                <label>制御点{rowIndex + 1}-{colIndex + 1}座標:</label>
                                <input
                                    type="number"
                                    value={point[0]}
                                    onChange={(e) => handleControlPointChange(rowIndex, colIndex, 'x', +e.target.value)}
                                />
                                <input
                                    type="number"
                                    value={point[1]}
                                    onChange={(e) => handleControlPointChange(rowIndex, colIndex, 'y', +e.target.value)}
                                />
                                <input
                                    type="number"
                                    value={point[2]}
                                    onChange={(e) => handleControlPointChange(rowIndex, colIndex, 'z', +e.target.value)}
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div>
                <label>Knots (U方向):</label>
                {knotsU.map((knot, index) => (
                    <input key={index} type="number" value={knot} onChange={(e) => handleKnotsUChange(index, +e.target.value)} />
                ))}
            </div>
            <div>
                <label>Knots (V方向):</label>
                {knotsV.map((knot, index) => (
                    <input key={index} type="number" value={knot} onChange={(e) => handleKnotsVChange(index, +e.target.value)} />
                ))}
            </div>
            <button onClick={handleCreate}>作成</button>
        </div>
    );
};

export default NURBSSurfaceCreation;
