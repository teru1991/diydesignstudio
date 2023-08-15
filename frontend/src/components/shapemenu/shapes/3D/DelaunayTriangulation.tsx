import React, { useState } from 'react';
import ParameterInput from '../../../common/ParameterInput';
import ColorPicker from "../../../common/ColorPicker";
import LineWidthSelector from "../../../common/LineWidthSelector";
import useShapeAPIHandler from "../../../hooks/useShapeAPIHandler";

const DelaunayTriangulationComponent: React.FC = () => {
    const [color, setColor] = useState("#000000");
    const [lineWidth, setLineWidth] = useState(1);

    // State for vertices
    const [vertices, setVertices] = useState<string[]>(["", ""]);

    const [apiIsSent, setApiIsSent] = useState(false);
    const [apiResponseData, setApiResponseData] = useState(null);

    const validateDelaunayTriangulationParams = (params: { vertices: string[] }) => {
        return params.vertices.every(vertex => vertex !== "");
    };

    const { sendData, loading, error } = useShapeAPIHandler(
        { vertices },
        color,
        lineWidth,
        validateDelaunayTriangulationParams
    );

    return (
        <div>
            {vertices.map((vertex, index) => (
                <ParameterInput
                    key={index}
                    label={`頂点${index + 1}`}
                    value={vertex}
                    onChange={(value: string) => {
                        const newVertices = [...vertices];
                        newVertices[index] = value;
                        setVertices(newVertices);
                    }}
                />
            ))}
            <button onClick={() => setVertices([...vertices, ""])}>頂点を追加</button>
            <ColorPicker value={color} onChange={setColor} />
            <LineWidthSelector value={lineWidth} onChange={setLineWidth} />

            <button onClick={sendData}>図形を作成</button>
            {loading && <p>データ送信中...</p>}
            {error && <p>エラー: {error}</p>}
            {apiResponseData && <p>バックエンドからの応答: {JSON.stringify(apiResponseData)}</p>}
        </div>
    );
};

export default DelaunayTriangulationComponent;
