import React from 'react';

interface SphereInputProps {
    center: number[];
    radius: number;
}

const SphereInput: React.FC<SphereInputProps> = ({ center, radius }) => {
    return (
        <div>
            <h3>球体</h3>
            <div>中心点座標: [{center[0]}, {center[1]}, {center[2]}]</div>
            <div>半径: {radius}</div>
        </div>
    );
};

export default SphereInput;
