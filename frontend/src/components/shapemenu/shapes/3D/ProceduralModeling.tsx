import React, { useState } from 'react';
import ParameterInput from '../../../common/ParameterInput';
import ColorPicker from "../../../common/ColorPicker";
import LineWidthSelector from "../../../common/LineWidthSelector";
import useShapeAPIHandler from "../../../hooks/useShapeAPIHandler";

const SphereComponent: React.FC = () => {
    const [color, setColor] = useState("#000000");  // Default black color
    const [lineWidth, setLineWidth] = useState(1);  // Default line width

    // Additional state for Sphere parameters
    const [center, setCenter] = useState("");
    const [radius, setRadius] = useState("");

    const [parameters, setParameters] = useState([{ label: "中心点", value: center }, { label: "半径", value: radius }]);

    const addParameter = () => {
        setParameters([...parameters, { label: "", value: "" }]);
    };

    const validateSphereParams = (params: { center: string; radius: string }) => {
        return params.center !== "" && params.radius !== "";
    };

    const { sendData, loading, error, responseData } = useShapeAPIHandler(
        { center, radius },
        color,
        lineWidth,
        validateSphereParams
    );

    return (
        <div>
            {parameters.map((param, index) => (
                <ParameterInput key={index} label={param.label} value={param.value} onChange={value => {
                    const newParameters = [...parameters];
                    newParameters[index].value = value;
                    setParameters(newParameters);
                }} />
            ))}
            <button onClick={addParameter}>+</button>
            <ColorPicker value={color} onChange={setColor} />
            <LineWidthSelector value={lineWidth} onChange={setLineWidth} />

            <button onClick={sendData}>図形を作成</button>
            {loading && <p>データ送信中...</p>}
            {error && <p>エラー: {error}</p>}
            {responseData && <p>バックエンドからの応答: {JSON.stringify(responseData)}</p>}
        </div>
    );
};

export default SphereComponent;
