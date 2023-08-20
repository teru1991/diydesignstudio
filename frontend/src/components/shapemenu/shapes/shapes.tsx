import React, {useEffect, useState} from 'react';
import ParameterInput from '../../common/ParameterInput';
import ColorPicker from "../../common/ColorPicker";
import LineWidthSelector from "../../common/LineWidthSelector";
import useShapeAPIHandler from "../../hooks/useShapeAPIHandler";
import LumberSelection from '../../lumber/LumberSelection';
import DepthInput from "../DepthInput";

// ArcComponent
const ArcComponent: React.FC = () => {
    const [arcColor, setArcColor] = useState("#000000");
    const [arcLineWidth, setArcLineWidth] = useState(1);

    const [radius, setRadius] = useState("");
    const [angle, setAngle] = useState("");
    const [previewData, setPreviewData] = useState(null);

    useEffect(() => {
        if (radius && angle) {
            // ここでAPIを呼び出して図形のデータを取得します。
            // 例: const data = fetchAPI(radius, angle);
            // setPreviewData(data);
        }
    }, [radius, angle]);

    return (
        <div>
            <ParameterInput label="半径" value={radius} onChange={setRadius} />
            <ParameterInput label="角度" value={angle} onChange={setAngle} />
            <ColorPicker value={arcColor} onChange={setArcColor} />
            <LineWidthSelector value={arcLineWidth} onChange={setArcLineWidth} />
            {previewData && (
                <div>
                    {/* ここでプレビュー図形を表示します。 */}
                    <button onClick={() => {/* ToDo: Implement Arc Drawing on Canvas functionality here */}}>図形を描画</button>
                </div>
            )}
        </div>
    );
};

// RectangleComponent
const RectangleComponent: React.FC = () => {
    const [rectColor, setRectColor] = useState("#000000");
    const [rectLineWidth, setRectLineWidth] = useState(1);

    const [length, setLength] = useState("");
    const [width, setWidth] = useState("");
    const [previewData, setPreviewData] = useState(null);

    useEffect(() => {
        if (length && width) {
            // ここでAPIを呼び出して図形のデータを取得します。
            // 例: const data = fetchAPI(radius, angle);
            // setPreviewData(data);
        }
    }, [length, width]);

    return (
        <div>
            <ParameterInput label="長さ" value={length} onChange={setLength} />
            <ParameterInput label="幅" value={width} onChange={setWidth} />
            <ColorPicker value={rectColor} onChange={setRectColor} />
            <LineWidthSelector value={rectLineWidth} onChange={setRectLineWidth} />
            {previewData && (
                <div>
                    {/* ここでプレビュー図形を表示します。 */}
                    <button onClick={() => {/* ToDo: Implement Arc Drawing on Canvas functionality here */}}>図形を描画</button>
                </div>
            )}        </div>
    );
};

// TriangleComponent
const TriangleComponent: React.FC = () => {
    const [triColor, setTriColor] = useState("#000000");
    const [triLineWidth, setTriLineWidth] = useState(1);

    const [base, setBase] = useState("");
    const [height, setHeight] = useState("");
    const [previewData, setPreviewData] = useState(null);

    useEffect(() => {
        if (base && height) {
            // ここでAPIを呼び出して図形のデータを取得します。
            // 例: const data = fetchAPI(radius, angle);
            // setPreviewData(data);
        }
    }, [base, height]);

    return (
        <div>
            <ParameterInput label="底辺の長さ" value={base} onChange={setBase} />
            <ParameterInput label="高さ" value={height} onChange={setHeight} />
            <ColorPicker value={triColor} onChange={setTriColor} />
            <LineWidthSelector value={triLineWidth} onChange={setTriLineWidth} />
            {previewData && (
                <div>
                    {/* ここでプレビュー図形を表示します。 */}
                    <button onClick={() => {/* ToDo: Implement Arc Drawing on Canvas functionality here */}}>図形を描画</button>
                </div>
            )}
        </div>
    );
};

export { ArcComponent, RectangleComponent, TriangleComponent };
