import React from 'react';
import SphereComponent from './SphereComponent';
import CylinderComponent from './CylinderComponent';
import ConeComponent from './ConeComponent';
import CubeComponent from './CubeComponent';
import RectangularPrismComponent from './RectangularPrismComponent';
import TetrahedronComponent from './TetrahedronComponent';
import PentahedronComponent from './PentahedronComponent';
import HexahedronComponent from './HexahedronComponent';
import TorusComponent from './TorusComponent';
// 他の3D図形コンポーネントのインポート

const ThreeDShapeParameters: React.FC<{ shapeType: string }> = ({ shapeType }) => {
  switch (shapeType) {
    case '球体':
      return <SphereComponent />;
    case '円柱':
      return <CylinderComponent />;
    case '円錐':
      return <ConeComponent />;
    case '立方体':
      return <CubeComponent />;
    case '直方体':
      return <RectangularPrismComponent />;
    case '四面体':
      return <TetrahedronComponent />;
    case '五面体':
      return <PentahedronComponent />;
    case '六面体':
      return <HexahedronComponent />;
    case 'トーラス':
      return <TorusComponent />;
    // 他の3D図形のケース
    default:
      return null;
  }
};

export default ThreeDShapeParameters;
