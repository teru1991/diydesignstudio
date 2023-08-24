// RectangleComponent

import React, { useEffect, useState } from 'react';
import ParameterInput from '../../../common/ParameterInput';
import ColorPicker from "../../../common/ColorPicker";
import LineWidthSelector from "../../../common/LineWidthSelector";
import LumberSelection from '../../../lumber/LumberSelection';
import {Lumber} from '../../../lumber/LumberSelection';
import DepthInput from "../../DepthInput";
import LumberRegistration from "../../../lumber/LumberRegistration";
import ShapeRenderer from "../../../shaperenderer/ShapeRenderer";

// RectangleComponent
const RectangleComponent: React.FC = () => {
    const [rectColor, setRectColor] = useState("#000000");
    const [rectLineWidth, setRectLineWidth] = useState(1);

    const [length, setLength] = useState<number>(0); // 適切な初期値に変更
    const [width, setWidth] = useState<number>(0); // 適切な初期値に変更
    const [depth, setDepth] = useState<number>(0);
    const [selectedLumber, setSelectedLumber] = useState<Lumber | null>(null);
    const [previewData, setPreviewData] = useState(null);
    const [showLumberModal, setShowLumberModal] = useState(false);
    const handleLumberRegister = (lumber: Lumber) => {
        // ここでAPIを呼び出して新しい材料をデータベースに登録します。
        // 成功したら、モーダルを閉じて、新しい材料をドロップダウンリストに追加します。
        setShowLumberModal(false);
        // lumbers.push(lumber); // この部分はAPIの応答に応じて調整する必要があります。
    };
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


    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    useEffect(() => {
        if (selectedLumber) {
            const inputLength = Number(length);
            const inputWidth = Number(width);

            const fitsNormally = inputLength <= selectedLumber.length && inputWidth <= selectedLumber.width;
            const fitsReversed = inputLength <= selectedLumber.width && inputWidth <= selectedLumber.length;

            if (!fitsNormally && !fitsReversed) {
                setErrorMessage('選択された材料からこのパーツは作成できません。');
            } else {
                setErrorMessage(null);
            }

        }
    }, [length, width, selectedLumber]);
    const fetchShapeData = async () => {
        try {
            const response = await fetch('http://localhost:8080/save_shape', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    shape_type: "Rectangle",
                    length: length,
                    width: width,
                    depth: depth,
                    color: rectColor,
                    line_width: rectLineWidth
                })
            });

            const data = await response.json();
            setPreviewData(data);
        } catch (error) {
            console.error("Error fetching shape data:", error);
        }
    };

    useEffect(() => {
        if (length && width) {
            fetchShapeData();
        }
    }, [length, width]);

    return (
        <div>
            <h2>四角形のパラメータ</h2>

            {/* 図形のパラメータ入力 */}
            <ParameterInput label="長さ" value={length.toString()} onChange={(value) => setLength(Number(value))} />
            <ParameterInput label="幅" value={width.toString()} onChange={(value) => setWidth(Number(value))} />

            {!selectedLumber && <DepthInput onDepthChange={setDepth} />}

            {/* 材料の選択 */}
            <LumberSelection lumbers={lumbers} onSelect={setSelectedLumber} onRegisterClick={() => setShowLumberModal(true)} />
            {showLumberModal && <LumberRegistration onRegister={handleLumberRegister} />}

            <ColorPicker value={rectColor} onChange={setRectColor} />
            <LineWidthSelector value={rectLineWidth} onChange={setRectLineWidth} />
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            {previewData && (
                <div>
                    {previewData && (
                        <div>
                            <ShapeRenderer
                                type="rectangle"
                                data={{ length, width }} // previewData.length と previewData.width ではなく、直接 length と width を使用
                                color={rectColor}
                                lineWidth={rectLineWidth}
                            />
                            <button onClick={() => {/* ToDo: Implement Rectangle Drawing on Canvas functionality here */}}>図形を描画</button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default RectangleComponent;