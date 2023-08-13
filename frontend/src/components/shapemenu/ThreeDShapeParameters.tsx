import React from 'react';
import SphereComponent from '../shapemenu/shapes/3D/Sphere';
import CylinderComponent from '../shapemenu/shapes/3D/Cylinder';
import ConeComponent from '../shapemenu/shapes/3D/Cone';
import CubeComponent from '../shapemenu/shapes/3D/Cube';
import RectangularPrismComponent from '../shapemenu/shapes/3D/RectangularPrism';
import TetrahedronComponent from '../shapemenu/shapes/3D/Tetrahedron';
import PentahedronComponent from '../shapemenu/shapes/3D/Pentahedron';
import HexahedronComponent from '../shapemenu/shapes/3D/Hexahedron';
import TorusComponent from '../shapemenu/shapes/3D/Torus';
import BezierCurveComponent from '../shapemenu/shapes/3D/BezierCurve';
import CompositeSurfaceComponent from '../shapemenu/shapes/3D/CompositeSurface';
import ContourModelingComponent from '../shapemenu/shapes/3D/ContourModeling';
import DelaunayTriangulationComponent from '../shapemenu/shapes/3D/DelaunayTriangulation';
import FractalTerrainComponent from '../shapemenu/shapes/3D/FractalTerrain';
import MetaballComponent from '../shapemenu/shapes/3D/Metaball';
import NURBSSurfaceComponent from '../shapemenu/shapes/3D/NURBSSurface';
import ParametricSurfaceComponent from '../shapemenu/shapes/3D/ParametricSurface';
import PointCloudComponent from '../shapemenu/shapes/3D/PointCloud';
import ProceduralModelingComponent from '../shapemenu/shapes/3D/ProceduralModeling';
import SculptingComponent from '../shapemenu/shapes/3D/Sculpting';
import SubdivisionSurfaceComponent from '../shapemenu/shapes/3D/SubdivisionSurface';
import VolumeModelingComponent from '../shapemenu/shapes/3D/VolumeModeling';

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
    case 'ベジェ曲線':
      return <BezierCurveComponent />;
    case 'コンポジットサーフェス':
      return <CompositeSurfaceComponent />;
    case 'コンターモデリング':
      return <ContourModelingComponent />;
    case 'デローニ三角形分割':
      return <DelaunayTriangulationComponent />;
    case 'フラクタル地形':
      return <FractalTerrainComponent />;
    case 'メタボール':
      return <MetaballComponent />;
    case 'NURBSサーフェス':
      return <NURBSSurfaceComponent />;
    case 'パラメトリックサーフェス':
      return <ParametricSurfaceComponent />;
    case '点群':
      return <PointCloudComponent />;
    case 'プロシージャルモデリング':
      return <ProceduralModelingComponent />;
    case 'スカルプティング':
      return <SculptingComponent />;
    case 'サブディビジョンサーフェス':
      return <SubdivisionSurfaceComponent />;
    case 'ボリュームモデリング':
      return <VolumeModelingComponent />;
    default:
      return null;
  }
};

export default ThreeDShapeParameters;
