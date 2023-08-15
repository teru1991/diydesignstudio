import React, { useState } from 'react';
import ColorPicker from "../../../common/ColorPicker";
import LineWidthSelector from "../../../common/LineWidthSelector";
import useShapeAPIHandler from "../../../hooks/useShapeAPIHandler";

const ParametricSurfaceComponent: React.FC = () => {
    const [color, setColor] = useState("#000000");
    const [lineWidth, setLineWidth] = useState(1);

    // State for ParametricSurface parameters
    const [equationX, setEquationX] = useState("");
    const [equationY, setEquationY] = useState("");
    const [equationZ, setEquationZ] = useState("");
    const [uRange, setURange] = useState("");
    const [vRange, setVRange] = useState("");

    const [apiIsSent, setApiIsSent] = useState(false);
    const [apiResponseData, setApiResponseData] = useState(null);

    const validateParametricSurfaceParams = () => {
        return equationX !== "" && equationY !== "" && equationZ !== "" && uRange !== "" && vRange !== "";
    };

    const { sendData, loading, error } = useShapeAPIHandler(
        { equationX, equationY, equationZ, uRange, vRange },
        color,
        lineWidth,
        validateParametricSurfaceParams
    );

    return (
        <div>
            <label>方程式:</label>
            <input type="text" value={equationX} onChange={e => setEquationX(e.target.value)} placeholder="x(u,v)" />
            <input type="text" value={equationY} onChange={e => setEquationY(e.target.value)} placeholder="y(u,v)" />
            <input type="text" value={equationZ} onChange={e => setEquationZ(e.target.value)} placeholder="z(u,v)" />
            <label>パラメータ範囲:</label>
            <input type="text" value={uRange} onChange={e => setURange(e.target.value)} placeholder="uの範囲" />
            <input type="text" value={vRange} onChange={e => setVRange(e.target.value)} placeholder="vの範囲" />
            <ColorPicker value={color} onChange={setColor} />
            <LineWidthSelector value={lineWidth} onChange={setLineWidth} />

            <button onClick={sendData}>図形を作成</button>
            {loading && <p>データ送信中...</p>}
            {error && <p>エラー: {error}</p>}
            {apiResponseData && <p>バックエンドからの応答: {JSON.stringify(apiResponseData)}</p>}
        </div>
    );
};

export default ParametricSurfaceComponent;
