import React, { useState, useEffect } from 'react';
import ParameterInput from '../../../common/ParameterInput';
import ColorPicker from "../../../common/ColorPicker";
import LineWidthSelector from "../../../common/LineWidthSelector";
import useShapeAPIHandler from "../../../hooks/useShapeAPIHandler";

const BSplineCurveComponent: React.FC = () => {
    const [degree, setDegree] = useState(3);
    const [controlPoints, setControlPoints] = useState<string[]>(Array(degree + 1).fill(""));
    const [knotVector, setKnotVector] = useState<string[]>(Array(degree + 4).fill(""));
    const [color, setColor] = useState("#000000");
    const [lineWidth, setLineWidth] = useState(1);

    useEffect(() => {
        setControlPoints(prev => Array(degree + 1).fill(""));
        setKnotVector(prev => Array(degree + 4).fill(""));
    }, [degree]);

    const isValid = () => controlPoints.every(p => p !== "") && knotVector.every(k => k !== "");

    const { sendData, loading, error } = useShapeAPIHandler(
        { controlPoints, knotVector },
        color,
        lineWidth,
        isValid
    );

    return (
        <div>
            <ParameterInput label="次数" value={degree.toString()} onChange={value => setDegree(Number(value))} />
            {controlPoints.map((point, index) => (
                <ParameterInput key={index} label={`制御点${index}`} value={point} onChange={value => {
                    const newPoints = [...controlPoints];
                    newPoints[index] = value;
                    setControlPoints(newPoints);
                }} />
            ))}
            {knotVector.map((knot, index) => (
                <ParameterInput key={index} label={`ノット${index}`} value={knot} onChange={value => {
                    const newKnots = [...knotVector];
                    newKnots[index] = value;
                    setKnotVector(newKnots);
                }} />
            ))}
            <ColorPicker value={color} onChange={setColor} />
            <LineWidthSelector value={lineWidth} onChange={setLineWidth} />

            <button onClick={sendData}>図形を作成</button>
            {loading && <p>データ送信中...</p>}
            {error && <p>エラー: {error}</p>}
        </div>
    );
};


export default BSplineCurveComponent;
