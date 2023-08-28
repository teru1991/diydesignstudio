import React, { useState } from 'react';

const LayerProperties = () => {
    const [color, setColor] = useState('#000000');
    const [lineType, setLineType] = useState('solid');
    const [lineWidth, setLineWidth] = useState(1);

    return (
        <div className="layer-properties">
            <h4>Layer Properties</h4>
            <label>
                Color:
                <input type="color" value={color} onChange={e => setColor(e.target.value)} />
            </label>
            <label>
                Line Type:
                <select value={lineType} onChange={e => setLineType(e.target.value)}>
                    <option value="solid">Solid</option>
                    <option value="dashed">Dashed</option>
                    <option value="dotted">Dotted</option>
                </select>
            </label>
            <label>
                Line Width:
                <input type="number" value={lineWidth} onChange={e => setLineWidth(parseInt(e.target.value))} />
            </label>
        </div>
    );
}

export default LayerProperties;
