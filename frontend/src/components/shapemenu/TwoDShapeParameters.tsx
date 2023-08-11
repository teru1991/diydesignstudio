import React from 'react';
import LineComponent from './shapes/2D/Line';
import CircleComponent from './shapes/2D/Circle';
import EllipseComponent from './shapes/2D/Ellipse';
import ArcComponent from './shapes/2D/Arc';
import SplineComponent from './shapes/2D/Spline';
import TriangleComponent from './shapes/2D/Triangle';
import SquareComponent from './shapes/2D/Square';
import RectangleComponent from './shapes/2D/Rectangle';
import DiamondComponent from './shapes/2D/Diamond';
import ParallelogramComponent from './shapes/2D/Parallelogram';
import TrapezoidComponent from './shapes/2D/Trapezoid';
import RegularPolygonComponent from './shapes/2D/RegularPolygon';
// 他の2D図形コンポーネントのインポート

const TwoDShapeParameters: React.FC<{ shapeType: string }> = ({ shapeType }) => {
  switch (shapeType) {
    case '直線':
    case '線分':
      return <LineComponent />;
    case '円':
      return <CircleComponent />;
    case '楕円':
      return <EllipseComponent />;
    case '弧':
      return <ArcComponent />;
    case 'スプライン曲線':
      return <SplineComponent />;
    case '三角形':
      return <TriangleComponent />;
    case '正方形':
      return <SquareComponent />;
    case '長方形':
      return <RectangleComponent />;
    case 'ひし形':
      return <DiamondComponent />;
    case '平行四辺形':
      return <ParallelogramComponent />;
    case '台形':
      return <TrapezoidComponent />;
    case '正多角形':
      return <RegularPolygonComponent />;
    // 他の2D図形のケース
    default:
      return null;
  }
};

export default TwoDShapeParameters;
