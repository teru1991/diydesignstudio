
import React, { useState } from 'react';

const withZoom = (WrappedComponent: React.ComponentType<any>) => {
    return (props: any) => {
        const [scale, setScale] = useState(1); // ズームのスケールを管理するstate

        const handleZoomIn = () => {
            setScale((prevScale) => prevScale * 1.1);
        };

        const handleZoomOut = () => {
            setScale((prevScale) => prevScale / 1.1);
        };

        return (
            <div>
                <div
                    style={{
                        transform: `scale(${scale})`,
                        transition: 'transform 0.3s',
                    }}
                >
                    <WrappedComponent {...props} />
                </div>
                <button onClick={handleZoomIn}>Zoom In</button>
                <button onClick={handleZoomOut}>Zoom Out</button>
            </div>
        );
    };
};

export default withZoom;
