import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Shape3DProps {
    type: string;
    data: any;
    color: string;
    materialType?: string;
}

const Shape3DRenderer: React.FC<Shape3DProps> = ({ type, data, color, materialType = "MeshBasicMaterial" }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scene = new THREE.Scene();
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;

    useEffect(() => {
        if (containerRef.current) {
            const width = containerRef.current.clientWidth;
            const height = containerRef.current.clientHeight;

            // Cameraの初期化
            camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
            camera.position.z = 5;

            // Rendererの初期化
            renderer = new THREE.WebGLRenderer();
            renderer.setSize(width, height);
            containerRef.current.appendChild(renderer.domElement);

            // Lightの追加
            const light = new THREE.DirectionalLight(0xffffff, 1);
            light.position.set(1, 1, 1).normalize();
            scene.add(light);

            // 図形のレンダリング
            let geometry: THREE.BufferGeometry = new THREE.BufferGeometry(); // Initialize with a default value
            let material: THREE.Material;

            if (materialType === "MeshBasicMaterial") {
                material = new THREE.MeshBasicMaterial({ color });
            } else {
                material = new THREE.MeshBasicMaterial({ color }); // Default value
            }

            switch (type) {
                case 'cube':
                    geometry = new THREE.BoxGeometry(data.width, data.height, data.depth);
                    break;
                case 'sphere':
                    geometry = new THREE.SphereGeometry(data.radius);
                    break;
                case 'triangular-prism':
                    // 三角柱のジオメトリを定義します
                    // ... ここにロジックを追加 ...
                    break;
                default:
                    console.error("Unsupported 3D shape type");
                    return;
            }

            const mesh = new THREE.Mesh(geometry, material);
            scene.add(mesh);

            // レンダリングループ
            const animate = () => {
                requestAnimationFrame(animate);
                renderer.render(scene, camera);
            };

            animate();
        }

        return () => {
            if (renderer) {
                renderer.dispose();
            }
        };
    }, [type, data, color, materialType]);

    return <div ref={containerRef} style={{ width: '300px', height: '300px' }} />;
};

export default Shape3DRenderer;
