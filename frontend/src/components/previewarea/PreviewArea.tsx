import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

interface PreviewAreaProps {
  scale: number;
  onRotationChange?: (rotation: { x: number; y: number; z: number }) => void;
  gridSettings?: { size: number; divisions: number; colorCenterLine?: string; colorGrid?: string };
  axisVisibility?: { x: boolean; y: boolean; z: boolean };
  controlsEnabled?: boolean;
  initialRotation?: { x: number; y: number; z: number };
}

const PreviewArea: React.FC<PreviewAreaProps> = ({
  scale,
  onRotationChange,
  gridSettings,
  axisVisibility,
  controlsEnabled,
  initialRotation,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      // シーン、カメラ、レンダラーの作成
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(width, height);
      containerRef.current.appendChild(renderer.domElement);

      // グリッドの作成
      const gridHelper = new THREE.GridHelper(
        gridSettings?.size || scale,
        gridSettings?.divisions || 10,
        gridSettings?.colorCenterLine,
        gridSettings?.colorGrid
      );
      scene.add(gridHelper);

      // 軸の作成
      if (axisVisibility) {
        if (axisVisibility.x) {
          const xAxisHelper = new THREE.AxesHelper(scale);
          xAxisHelper.visible = true;
          scene.add(xAxisHelper);
        }
        if (axisVisibility.y) {
          const yAxisHelper = new THREE.AxesHelper(scale);
          yAxisHelper.visible = true;
          scene.add(yAxisHelper);
        }
        if (axisVisibility.z) {
          const zAxisHelper = new THREE.AxesHelper(scale);
          zAxisHelper.visible = true;
          scene.add(zAxisHelper);
        }
      }


      // カメラの位置設定
      camera.position.z = 5;

      // OrbitControlsの設定
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enabled = controlsEnabled || false;

      // アニメーションループ
      const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
        if (onRotationChange) {
          onRotationChange({
            x: camera.rotation.x,
            y: camera.rotation.y,
            z: camera.rotation.z,
          });
        }
      };
      animate();

      // 初期回転の設定
      if (initialRotation) {
        camera.rotation.set(initialRotation.x, initialRotation.y, initialRotation.z);
      }

      // スケールが変更されたときにグリッドを更新
      return () => {
        scene.remove(gridHelper);
      };
    }
  }, [scale, gridSettings, axisVisibility, controlsEnabled, initialRotation, onRotationChange]);

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
};

export default PreviewArea;
