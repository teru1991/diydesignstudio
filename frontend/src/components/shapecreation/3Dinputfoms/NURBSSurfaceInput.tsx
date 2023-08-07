import React from 'react';

interface NURBSSurfaceInputProps {
    controlPoints: number[][][];
    knotsU: number[];
    knotsV: number[];
}

const NURBSSurfaceInput: React.FC<NURBSSurfaceInputProps> = ({ controlPoints, knotsU, knotsV }) => {
    return (
        <div>
            <h3>NURBS曲面</h3>
            <div>
                {controlPoints.map((row, rowIndex) => (
                    <div key={rowIndex}>
                        {row.map((point, colIndex) => (
                            <div key={colIndex}>制御点{rowIndex + 1}-{colIndex + 1}座標: [{point[0]}, {point[1]}, {point[2]}]</div>
                        ))}
                    </div>
                ))}
            </div>
            <div>Knots (U方向): [{knotsU.join(', ')}]</div>
            <div>Knots (V方向): [{knotsV.join(', ')}]</div>
        </div>
    );
};

export default NURBSSurfaceInput;
