import * as THREE from 'three';

interface Shape3DProps {
    type: string;
    data: any;
    color: string;
    materialType?: string;
}

const Shape3DRenderer: React.FC<Shape3DProps> = ({ type, data, color, materialType = "MeshBasicMaterial" }) => {
    let geometry;
    let material: THREE.Material;

    if (materialType === "MeshBasicMaterial") {
        material = new THREE.MeshBasicMaterial({ color });
    } else {
        material = new THREE.MeshBasicMaterial({ color }); // デフォルト値
    }

    switch (type) {
        case 'cube':
            geometry = new THREE.BoxGeometry(data.width, data.height, data.depth);
            break;
        // 例: 3Dの球のロジック
        case 'sphere':
            geometry = new THREE.SphereGeometry(data.radius);
            break;
        // 他の3D図形のロジックもここに追加します。
        default:
            return <div>Unsupported 3D shape type</div>;
    }

    const mesh = new THREE.Mesh(geometry, material);
    // 3Dの描画ロジックをここに追加します。

    return <div>{/* 3Dの描画コンテンツ */}</div>;
};

export default Shape3DRenderer;
