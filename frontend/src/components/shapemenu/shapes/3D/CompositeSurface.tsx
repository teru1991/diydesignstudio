import React, { useState } from 'react';
import ParameterInput from '../../../common/ParameterInput';
import ColorPicker from "../../../common/ColorPicker";
import LineWidthSelector from "../../../common/LineWidthSelector";
import useShapeAPIHandler from "../../../hooks/useShapeAPIHandler";

const CompositeSurfaceComponent: React.FC = () => {
    const [compositeColor, setCompositeColor] = useState("#000000");
    const [compositeLineWidth, setCompositeLineWidth] = useState(1);
    const [surfaces, setSurfaces] = useState([{ type: "", params: "" }]);
    const [combinationMethod, setCombinationMethod] = useState("union");

    const [apiIsSent, setApiIsSent] = useState(false);
    const [apiResponseData, setApiResponseData] = useState(null);

    const validateCompositeSurfaceParams = (surfaces: Array<{ type: string, params: string }>) => {
        return surfaces.every(surface => surface.type !== "" && surface.params !== "");
    };

    const { sendData, loading, error } = useShapeAPIHandler(
        { surfaces },
        compositeColor,
        compositeLineWidth,
        validateCompositeSurfaceParams
    );

    const addSurface = () => {
        setSurfaces([...surfaces, { type: "", params: "" }]);
    };

    return (
        <div>
            {surfaces.map((surface, index) => (
                <div key={index}>
                    <ParameterInput
                        label={`曲面 ${index + 1} タイプ`}
                        value={surface.type}
                        onChange={(value: string) => {
                            const newSurfaces = [...surfaces];
                            newSurfaces[index].type = value;
                            setSurfaces(newSurfaces);
                        }}
                    />
                    <ParameterInput
                        label={`曲面 ${index + 1} パラメータ`}
                        value={surface.params}
                        onChange={(value: string) => {
                            const newSurfaces = [...surfaces];
                            newSurfaces[index].params = value;
                            setSurfaces(newSurfaces);
                        }}
                    />
                </div>
            ))}
            <button onClick={addSurface}>曲面を追加</button>
            <label>結合方法:</label>
            <select value={combinationMethod} onChange={e => setCombinationMethod(e.target.value)}>
                <option value="union">結合</option>
                <option value="intersect">交差</option>
            </select>
            <ColorPicker value={compositeColor} onChange={setCompositeColor} />
            <LineWidthSelector value={compositeLineWidth} onChange={setCompositeLineWidth} />

            <button onClick={sendData}>図形を作成</button>
            {loading && <p>データ送信中...</p>}
            {error && <p>エラー: {error}</p>}
            {apiResponseData && <p>バックエンドからの応答: {JSON.stringify(apiResponseData)}</p>}
        </div>
    );
};

export default CompositeSurfaceComponent;
