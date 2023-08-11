import React, {useState} from 'react';
import * as THREE from 'three';

interface RotationControlsProps {
    shapeType: '2D' | '3D';
    onRotate3D: (axis: THREE.Vector3, angle: number) => void;
}

const RotationControls: React.FC<RotationControlsProps> = ({
                                                               shapeType,
                                                               onRotate3D,
                                                           }) => {
    const [selectedAxis, setSelectedAxis] = useState<THREE.Vector3 | null>(null);
    const [startDragPosition, setStartDragPosition] = useState<{ x: number; y: number } | null>(null);

    const handleMouseDown = (axis: THREE.Vector3, event: React.MouseEvent) => {
        setSelectedAxis(axis);
        setStartDragPosition({x: event.clientX, y: event.clientY});
    };

    const handleMouseMove = (event: React.MouseEvent) => {
        if (selectedAxis && startDragPosition) {
            const dx = event.clientX - startDragPosition.x;
            const dy = event.clientY - startDragPosition.y;
            const angle = Math.sqrt(dx * dx + dy * dy) * (Math.PI / 180);
            onRotate3D(selectedAxis, angle);
        }
    };

    const handleMouseUp = () => {
        setSelectedAxis(null);
        setStartDragPosition(null);
    };

    return (
        <div onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
            {shapeType === '3D' && (
                <div>
                    <button onMouseDown={(e) => handleMouseDown(new THREE.Vector3(1, 0, 0), e)}>X軸回転</button>
                    <button onMouseDown={(e) => handleMouseDown(new THREE.Vector3(0, 1, 0), e)}>Y軸回転</button>
                    <button onMouseDown={(e) => handleMouseDown(new THREE.Vector3(0, 0, 1), e)}>Z軸回転</button>
                    <button
                        onMouseDown={(e) => handleMouseDown(new THREE.Vector3(1, 1, 0).normalize(), e)}>XY間方向回転
                    </button>
                    <button
                        onMouseDown={(e) => handleMouseDown(new THREE.Vector3(1, 0, 1).normalize(), e)}>XZ間方向回転
                    </button>
                    <button
                        onMouseDown={(e) => handleMouseDown(new THREE.Vector3(0, 1, 1).normalize(), e)}>YZ間方向回転
                    </button>
                </div>
            )}
        </div>
    );
};

export default RotationControls;
