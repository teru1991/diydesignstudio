import React, { useState } from 'react';
import ParameterInput from '../../../common/ParameterInput';
import ColorPicker from "../../../common/ColorPicker";
import LineWidthSelector from "../../../common/LineWidthSelector";
import useShapeAPIHandler from "../../../hooks/useShapeAPIHandler";

const VoronoiDiagramComponent: React.FC = () => {
    const [diagramColor, setDiagramColor] = useState("#000000");
    const [diagramLineWidth, setDiagramLineWidth] = useState(1);

    const [sites, setSites] = useState<Array<string>>(["", ""]);

    const [apiIsSent, setApiIsSent] = useState(false);
    const [apiResponseData, setApiResponseData] = useState(null);

    const validateVoronoiDiagramSites = (sites: Array<string>) => {
        return sites.every(site => site !== "");
    };

    const { sendData, loading, error } = useShapeAPIHandler(
        { sites },
        diagramColor,
        diagramLineWidth,
        validateVoronoiDiagramSites
    );

    const handleAddSite = () => {
        setSites(prevSites => [...prevSites, ""]);
    };

    const handleSiteChange = (index: number, value: string) => {
        const updatedSites = [...sites];
        updatedSites[index] = value;
        setSites(updatedSites);
    };

    return (
        <div>
            {sites.map((site, index) => (
                <ParameterInput
                    key={index}
                    label={`生成点${index + 1}`}
                    value={site}
                    onChange={(value) => handleSiteChange(index, value)}
                />
            ))}
            <button onClick={handleAddSite}>+</button>
            <ColorPicker value={diagramColor} onChange={setDiagramColor} />
            <LineWidthSelector value={diagramLineWidth} onChange={setDiagramLineWidth} />

            <button onClick={sendData}>図形を作成</button>
            {loading && <p>データ送信中...</p>}
            {error && <p>エラー: {error}</p>}
            {apiResponseData && <p>バックエンドからの応答: {JSON.stringify(apiResponseData)}</p>}
        </div>
    );
};

export default VoronoiDiagramComponent;
