import React, { useState, useEffect } from 'react';
import ParameterInput from '../../../common/ParameterInput';
import ColorPicker from "../../../common/ColorPicker";
import LineWidthSelector from "../../../common/LineWidthSelector";
import useShapeAPIHandler from "../../../hooks/useShapeAPIHandler";

const VolumeModelingComponent: React.FC = () => {
    const [color, setColor] = useState("#000000");
    const [lineWidth, setLineWidth] = useState(1);

    const [densityFunction, setDensityFunction] = useState("");
    const [samplingRate, setSamplingRate] = useState(0);

    const isValid = () => densityFunction !== "" && samplingRate > 0;

    const { sendData, loading, error } = useShapeAPIHandler(
        { densityFunction, samplingRate },
        color,
        lineWidth,
        isValid
    );

    return (
        <div>
            <ParameterInput label="密度関数" value={densityFunction} onChange={setDensityFunction} />
            <ParameterInput label="サンプリングレート" value={samplingRate.toString()} onChange={value => setSamplingRate(Number(value))} />
            <ColorPicker value={color} onChange={setColor} />
            <LineWidthSelector value={lineWidth} onChange={setLineWidth} />

            <button onClick={sendData}>図形を作成</button>
            {loading && <p>データ送信中...</p>}
            {error && <p>エラー: {error}</p>}
        </div>
    );
};


export default VolumeModelingComponent;
