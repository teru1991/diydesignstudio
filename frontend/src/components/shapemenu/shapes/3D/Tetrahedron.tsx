import React, { useState } from 'react';
import ParameterInput from '../../../common/ParameterInput';
import ColorPicker from "../../../common/ColorPicker";
import LineWidthSelector from "../../../common/LineWidthSelector";
import useShapeAPIHandler from "../../../hooks/useShapeAPIHandler";

const TetrahedronComponent: React.FC = () => {
    const [tetrahedronColor, setTetrahedronColor] = useState("#000000");
    const [tetrahedronLineWidth, setTetrahedronLineWidth] = useState(1);

    const [edgeLength, setEdgeLength] = useState(0);

    const [apiIsSent, setApiIsSent] = useState(false);
    const [apiResponseData, setApiResponseData] = useState(null);

    const validateTetrahedronParams = (params: { edgeLength: number }) => {
        return params.edgeLength > 0;
    };

    const { sendData, loading, error } = useShapeAPIHandler(
        { edgeLength },
        tetrahedronColor,
        tetrahedronLineWidth,
        validateTetrahedronParams
    );

    return (
        <div>
            <ParameterInput
                label="辺の長さ"
                value={edgeLength.toString()}
                onChange={(value: string) => setEdgeLength(Number(value))}
            />
            <ColorPicker value={tetrahedronColor} onChange={setTetrahedronColor} />
            <LineWidthSelector value={tetrahedronLineWidth} onChange={setTetrahedronLineWidth} />

            <button onClick={sendData}>図形を作成</button>
            {loading && <p>データ送信中...</p>}
            {error && <p>エラー: {error}</p>}
            {apiResponseData && <p>バックエンドからの応答: {JSON.stringify(apiResponseData)}</p>}
        </div>
    );
};

export default TetrahedronComponent;
