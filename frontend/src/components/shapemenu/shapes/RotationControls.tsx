import React from 'react';

interface RotationControlsProps {
    shapeType: '2D' | '3D';
    onRotate90: (direction: 'left' | 'right') => void;
    onSmoothRotateStart: (direction: 'left' | 'right') => void;
    onSmoothRotateStop: () => void;
}

const RotationControls: React.FC<RotationControlsProps> = ({
                                                               shapeType,
                                                               onRotate90,
                                                               onSmoothRotateStart,
                                                               onSmoothRotateStop,
                                                           }) => {
    return (
        <div>
            {shapeType === '2D' ? (
                <div>
                    <button onClick={() => onRotate90('left')}>左に90度回転</button>
                    <button onClick={() => onRotate90('right')}>右に90度回転</button>
                    <button onMouseDown={() => onSmoothRotateStart('left')} onMouseUp={onSmoothRotateStop}>
                        左に滑らかに回転
                    </button>
                    <button onMouseDown={() => onSmoothRotateStart('right')} onMouseUp={onSmoothRotateStop}>
                        右に滑らかに回転
                    </button>
                </div>
            ) : (
                <div>
                    {/* 3D図形のための回転ボタン */}
                    {/* 3D図形の回転には、X軸、Y軸、Z軸などの追加の操作が必要になる場合があります */}
                </div>
            )}
        </div>
    );
};

export default RotationControls;
