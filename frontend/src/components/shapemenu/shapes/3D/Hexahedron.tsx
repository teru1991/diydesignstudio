import React, { useState } from 'react';
import ParameterInput from '../../../common/ParameterInput';
import ColorPicker from "../../../common/ColorPicker";
import LineWidthSelector from "../../../common/LineWidthSelector";
import useShapeAPIHandler from "../../../hooks/useShapeAPIHandler";

const HexahedronComponent: React.FC = () => {
    const [color, setColor] = useState("#000000");
    const [lineWidth, setLineWidth] = useState(1);

    // State for Hexahedron vertices
    const vertices = Array.from({ length: 8 }, (_, i) => useState(""));

    const [apiIsSent, setApiIsSent] = useState(false);
    const [apiResponseData, setApiResponseData] = useState(null);

    const validateHexahedronParams = (vertices: string[]) => {
        return vertices.every(vertex => vertex !== "");
    };

    const { sendData, loading, error } = useShapeAPIHandler(
        { vertices },
        color,
        lineWidth,
        validateHexahedronParams
    );

    return (
        <div>
            <h3>Hexahedron Parameters</h3>
            {vertices.map(([vertex, setVertex], index) => (
                <ParameterInput
                    key={index}
                    label={`Vertex ${index + 1} (x,y,z)`}
                    value={vertex}
                    onChange={(value: string) => setVertex(value)}
                />
            ))}
            <ColorPicker value={color} onChange={setColor} />
            <LineWidthSelector value={lineWidth} onChange={setLineWidth} />

            <button onClick={sendData}>図形を作成</button>
            {loading && <p>データ送信中...</p>}
            {error && <p>エラー: {error}</p>}
            {apiResponseData && <p>バックエンドからの応答: {JSON.stringify(apiResponseData)}</p>}
        </div>
    );
};

export default HexahedronComponent;
