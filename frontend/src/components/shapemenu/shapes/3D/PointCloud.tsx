import React, { useState } from 'react';
import ParameterInput from '../../../common/ParameterInput';
import ColorPicker from "../../../common/ColorPicker";
import LineWidthSelector from "../../../common/LineWidthSelector";
import useShapeAPIHandler from "../../../hooks/useShapeAPIHandler";

const PointCloudComponent: React.FC = () => {
    const [color, setColor] = useState("#000000"); // Default black color for component
    const [lineWidth, setLineWidth] = useState(1); // Default line width

    // PointCloud parameters state
    const [pointCoordinates, setPointCoordinates] = useState<string[]>([""]);
    const [pointColor, setPointColor] = useState("#FFFFFF"); // Default white color for points
    const [density, setDensity] = useState(0);

    const validatePointCloudParams = (params: { pointCoordinates: string[]; pointColor: string; density: number }) => {
        return params.pointCoordinates.every(coord => coord !== "") && params.pointColor !== "" && params.density >= 0;
    };

    const { sendData, loading, error, responseData } = useShapeAPIHandler(
        { pointCoordinates, pointColor, density },
        color,
        lineWidth,
        validatePointCloudParams
    );

    return (
        <div>
            {pointCoordinates.map((coord, index) => (
                <ParameterInput
                    key={index}
                    label={`点の座標 ${index + 1}`}
                    value={coord}
                    onChange={(value) => {
                        const newCoords = [...pointCoordinates];
                        newCoords[index] = value;
                        setPointCoordinates(newCoords);
                    }}
                />
            ))}
            <button onClick={() => setPointCoordinates([...pointCoordinates, ""])}>+</button>
            <label>色:</label>
            <input type="color" value={pointColor} onChange={(e) => setPointColor(e.target.value)} />
            <ParameterInput label="密度" value={density.toString()} onChange={(value) => setDensity(Number(value))} />
            <ColorPicker value={color} onChange={setColor} />
            <LineWidthSelector value={lineWidth} onChange={setLineWidth} />

            <button onClick={sendData}>図形を作成</button>
            {loading && <p>データ送信中...</p>}
            {error && <p>エラー: {error}</p>}
            {responseData && <p>バックエンドからの応答: {JSON.stringify(responseData)}</p>}
        </div>
    );
};

export default PointCloudComponent;
