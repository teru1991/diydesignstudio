// withRotate.tsx
import React, { useState } from 'react';

const withRotate = (WrappedComponent: React.ComponentType<any>) => {
    return (props: any) => {
        const [rotation, setRotation] = useState(0); // 回転角度を管理するstate

        const handleRotateLeft = () => {
            setRotation((prevRotation) => prevRotation - 15); // 15度左に回転
        };

        const handleRotateRight = () => {
            setRotation((prevRotation) => prevRotation + 15); // 15度右に回転
        };

        return (
            <div>
                <div
                    style={{
                        transform: `rotate(${rotation}deg)`,
                        transition: 'transform 0.3s',
                    }}
                >
                    <WrappedComponent {...props} />
                </div>
                <button onClick={handleRotateLeft}>左に回転</button>
                <button onClick={handleRotateRight}>右に回転</button>
            </div>
        );
    };
};

export default withRotate;
