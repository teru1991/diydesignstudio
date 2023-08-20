import React, { useEffect, useState } from 'react';
import ParameterInput from '../../../common/ParameterInput';
import ColorPicker from "../../../common/ColorPicker";
import LineWidthSelector from "../../../common/LineWidthSelector";
import LumberSelection from '../../../lumber/LumberSelection';
import {Lumber} from '../../../lumber/LumberSelection';
import DepthInput from "../../DepthInput";


// RectangleComponent
const RectangleComponent: React.FC = () => {
    const [rectColor, setRectColor] = useState("#000000");
    const [rectLineWidth, setRectLineWidth] = useState(1);

    const [length, setLength] = useState("");
    const [width, setWidth] = useState("");
    const [depth, setDepth] = useState<number>(0);
    const [selectedLumber, setSelectedLumber] = useState<Lumber | null>(null);
    const [previewData, setPreviewData] = useState(null);

    const lumbers = [ // このデータはAPIやデータベースから取得することも考えられます。
        { name: "Standard Lumber", length: 1820, width: 910, height: 20 }
    ];

    useEffect(() => {
        if (length && width) {
            // 材料が選択されている場合、その材料の深さを使用
            if (selectedLumber) {
                setDepth(selectedLumber.height);
            }
            // ここでAPIを呼び出して図形のデータを取得します。
            // 例: const data = fetchAPI(length, width, depth);
            // setPreviewData(data);
        }
    }, [length, width, selectedLumber]);

    return (
        <div>
            <ParameterInput label="長さ" value={length} onChange={setLength} />
            <ParameterInput label="幅" value={width} onChange={setWidth} />
            {!selectedLumber && <DepthInput onDepthChange={setDepth} />}
            <LumberSelection lumbers={lumbers} onSelect={setSelectedLumber} />
            <ColorPicker value={rectColor} onChange={setRectColor} />
            <LineWidthSelector value={rectLineWidth} onChange={setRectLineWidth} />
            {previewData && (
                <div>
                    {/* ここでプレビュー図形を表示します。 */}
                    <button onClick={() => {/* ToDo: Implement Rectangle Drawing on Canvas functionality here */}}>図形を描画</button>
                </div>
            )}
        </div>
    );
};

export default RectangleComponent;
