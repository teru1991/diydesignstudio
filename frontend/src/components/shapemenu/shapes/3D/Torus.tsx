import React, { useState } from 'react';
import ParameterInput from '../../../common/ParameterInput';
import ColorPicker from "../../../common/ColorPicker";
import LineWidthSelector from "../../../common/LineWidthSelector";
import useShapeAPIHandler from "../../../hooks/useShapeAPIHandler";

const TorusComponent: React.FC = () => {
    const [color, setColor] = useState("#000000");
    const [lineWidth, setLineWidth] = useState(1);

    // Torus parameters state
    const [majorRadius, setMajorRadius] = useState("");
    const [minorRadius, setMinorRadius] = useState("");
    const [sectionsCount, setSectionsCount] = useState("");
    const [rotationAngle, setRotationAngle] = useState("");

    const validateTorusParams = (params: { majorRadius: string; minorRadius: string; sectionsCount: string; rotationAngle: string }) => {
        return params.majorRadius !== "" && params.minorRadius !== "" && params.sectionsCount !== "" && params.rotationAngle !== "";
    };

    const { sendData, loading, error, responseData } = useShapeAPIHandler(
        { majorRadius, minorRadius, sectionsCount, rotationAngle },
        color,
        lineWidth,
        validateTorusParams
    );

    return (
        <div>
            <ParameterInput label="メジャーラジウス" value={majorRadius} onChange={setMajorRadius} />
            <ParameterInput label="マイナーラジウス" value={minorRadius} onChange={setMinorRadius} />
            <ParameterInput label="セクションの数" value={sectionsCount} onChange={setSectionsCount} />
            <ParameterInput label="回転角度 (degree)" value={rotationAngle} onChange={setRotationAngle} />
            <ColorPicker value={color} onChange={setColor} />
            <LineWidthSelector value={lineWidth} onChange={setLineWidth} />

            <button onClick={sendData}>図形を作成</button>
            {loading && <p>データ送信中...</p>}
            {error && <p>エラー: {error}</p>}
            {responseData && <p>バックエンドからの応答: {JSON.stringify(responseData)}</p>}
        </div>
    );
};

export default TorusComponent;
