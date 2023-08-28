import React, { useState } from 'react';

const LayerFilter = () => {
    const [filter, setFilter] = useState('');

    return (
        <div className="layer-filter">
            <h4>Filter Layers</h4>
            <input
                type="text"
                value={filter}
                onChange={e => setFilter(e.target.value)}
                placeholder="Filter by name..."
            />
        </div>
    );
}

export default LayerFilter;
