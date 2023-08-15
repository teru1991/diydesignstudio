import React, { useState } from 'react';
import ParameterInput from '../../../common/ParameterInput';
import ColorPicker from "../../../common/ColorPicker";
import LineWidthSelector from "../../../common/LineWidthSelector";
import useShapeAPIHandler from "../../../hooks/useShapeAPIHandler";

const CubeComponent: React.FC = () => {
    const [cubeColor, setCubeColor] = useState("#000000");
    const [cubeLineWidth, setCubeLineWidth] = useState(1);

    // Additional state for Cube parameters
    const [vertex, setVertex] = useState("");
    const [edgeLength, setEdgeLength] = useState("");

    const [apiIsSent, setApiIsSent] = useState(false);
    const [apiResponseData, setApiResponseData] = useState(null);

    const validateCubeParams = (params: { vertex: string; edgeLength: string }) => {
        return params.vertex !== "" && params.edgeLength !== "";
    };

    const { sendData, loading, error } = useShapeAPIHandler(
        { vertex, edgeLength },
        cubeColor,
        cubeLineWidth,
        validateCubeParams
    );

    return (
        <div>
            <ParameterInput
                label="頂点"
                value={vertex}
                onChange={(value: string) => setVertex(value)}
            />
            <ParameterInput
                label="辺の長さ"
                value={edgeLength}
                onChange={(value: string) => setEdgeLength(value)}
            />
            <ColorPicker value={cubeColor} onChange={setCubeColor} />
            <LineWidthSelector value={cubeLineWidth} onChange={setCubeLineWidth} />

            <button onClick={sendData}>図形を作成</button>
            {loading && <p>データ送信中...</p>}
            {error && <p>エラー: {error}</p>}
            {apiResponseData && <p>バックエンドからの応答: {JSON.stringify(apiResponseData)}</p>}
        </div>
    );
};

export default CubeComponent;
