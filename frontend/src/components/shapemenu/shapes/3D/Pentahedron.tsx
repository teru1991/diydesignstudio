import React, { useState } from 'react';
import ParameterInput from '../../../common/ParameterInput';
import ColorPicker from "../../../common/ColorPicker";
import LineWidthSelector from "../../../common/LineWidthSelector";
import useShapeAPIHandler from "../../../hooks/useShapeAPIHandler";

const PentahedronComponent: React.FC = () => {
    const [color, setColor] = useState("#000000");
    const [lineWidth, setLineWidth] = useState(1);

    // State for Pentahedron vertices
    const [vertex1, setVertex1] = useState("");
    const [vertex2, setVertex2] = useState("");
    const [vertex3, setVertex3] = useState("");
    const [vertex4, setVertex4] = useState("");
    const [vertex5, setVertex5] = useState("");

    const [apiIsSent, setApiIsSent] = useState(false);
    const [apiResponseData, setApiResponseData] = useState(null);

    const validatePentahedronParams = () => {
        return vertex1 !== "" && vertex2 !== "" && vertex3 !== "" && vertex4 !== "" && vertex5 !== "";
    };

    const { sendData, loading, error } = useShapeAPIHandler(
        { vertex1, vertex2, vertex3, vertex4, vertex5 },
        color,
        lineWidth,
        validatePentahedronParams
    );

    return (
        <div>
            <h3>Pentahedron Parameters</h3>
            <ParameterInput label="Vertex 1 (x,y,z)" value={vertex1} onChange={setVertex1} />
            <ParameterInput label="Vertex 2 (x,y,z)" value={vertex2} onChange={setVertex2} />
            <ParameterInput label="Vertex 3 (x,y,z)" value={vertex3} onChange={setVertex3} />
            <ParameterInput label="Vertex 4 (x,y,z)" value={vertex4} onChange={setVertex4} />
            <ParameterInput label="Vertex 5 (x,y,z)" value={vertex5} onChange={setVertex5} />
            <ColorPicker value={color} onChange={setColor} />
            <LineWidthSelector value={lineWidth} onChange={setLineWidth} />

            <button onClick={sendData}>図形を作成</button>
            {loading && <p>データ送信中...</p>}
            {error && <p>エラー: {error}</p>}
            {apiResponseData && <p>バックエンドからの応答: {JSON.stringify(apiResponseData)}</p>}
        </div>
    );
};

export default PentahedronComponent;
