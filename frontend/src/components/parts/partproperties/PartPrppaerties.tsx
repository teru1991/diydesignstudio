import React, { useState } from 'react';

const PartProperties = () => {
    const [name, setName] = useState('');
    const [relatedShapes, setRelatedShapes] = useState([]);
    const [relatedLayers, setRelatedLayers] = useState([]);

    return (
        <div className="part-properties">
            <h4>Part Properties</h4>
            <label>
                Name:
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </label>
            {/* 関連する図形やレイヤーの設定は、より詳細なロジックが必要ですが、ここではプレースホルダーとしています */}
            <div>Related Shapes: {relatedShapes.join(', ')}</div>
            <div>Related Layers: {relatedLayers.join(', ')}</div>
        </div>
    );
}

export default PartProperties;
