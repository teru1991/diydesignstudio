import React, { useState } from 'react';
import ParameterInput from '../../../common/ParameterInput';
import ColorPicker from "../../../common/ColorPicker";
import LineWidthSelector from "../../../common/LineWidthSelector";
import useShapeAPIHandler from "../../../hooks/useShapeAPIHandler";

const RegularPolygonComponent: React.FC = () => {
  const [sides, setSides] = useState(3); // 初期値は三角形
    const [color, setColor] = useState("#000000");  // Default black color
    const [lineWidth, setLineWidth] = useState(1);  // Default line width
  const handleSidesChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSides(Number(event.target.value));
  };

  

    // Additional state for RegularPolygon parameters
    const [param1, setParam1] = useState("");
    const [param2, setParam2] = useState("");

    // 1. Add useState definitions
    const [isSent, setIsSent] = useState(false);
    const [responseData, setResponseData] = useState(null);

    // 2. Add the validation function for RegularPolygon parameters
    const validateRegularPolygonParams = (params: { param1: string; param2: string }) => {
        return params.param1 !== "" && params.param2 !== "";
    };

    // 3. Use the custom hook
    const { sendData, loading, error } = useShapeAPIHandler(
        { param1, param2 },
        color,
        lineWidth,
        validateRegularPolygonParams
    );

    return (
    <div>
      <label>
        辺の数:
        <select value={sides} onChange={handleSidesChange}>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          {/* 他の辺の数のオプション */}
        </select>
      </label>
      <ParameterInput label="頂点" value="" onChange={() => {}} />
      <ParameterInput label="辺の長さ" value="" onChange={() => {}} />
        <ColorPicker value={color} onChange={setColor} />
        <LineWidthSelector value={lineWidth} onChange={setLineWidth} />
    
                <button onClick={sendData}>図形を作成</button>
                {loading && <p>データ送信中...</p>}
                {error && <p>エラー: {error}</p>}
                {responseData && <p>バックエンドからの応答: {JSON.stringify(responseData)}</p>}
    </div>
  );
};

export default RegularPolygonComponent;
