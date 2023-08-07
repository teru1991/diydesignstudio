import React, { useState } from 'react';
import './ShapeCreation.scss';
import './ShapePreview.scss';

interface ShapeCreationProps {
    initialTab: '3D' | '2D';
}
interface ShapePreviewProps {
    selectedShape: string | null;
    shapeParams: any; // Replace 'any' with the specific type for shape parameters
}
const ShapePreview: React.FC<ShapePreviewProps> = ({ selectedShape, shapeParams }) => {
    // You can add your logic here to generate the preview based on the selected shape and its parameters
    // For example, render SVG shapes, canvas, or any other representation of the shape preview
    return (
        <div className="shape-preview">
            {/* Add your preview elements here */}
            {selectedShape && <p>Shape Preview for {selectedShape}</p>}
            {/* Add the preview of the selected shape based on the shapeParams */}
        </div>
    );
};
interface ShapeCreationProps {
    initialTab: '3D' | '2D';
}

const ShapeCreation: React.FC<ShapeCreationProps> = ({ initialTab }) => {
    const [currentTab, setCurrentTab] = useState(initialTab);
    const [selectedShape, setSelectedShape] = useState<string | null>(null);

    // State variables to hold necessary parameters for each 3D shape
    // Replace 'any' with the specific types for each shape's parameters
    const [cubeParams, setCubeParams] = useState<{
        center: string;
        width: string;
        height: string;
        depth: string;
    }>({
        center: '',
        width: '',
        height: '',
        depth: '',
    });

    const [sphereParams, setSphereParams] = useState<{
        center: string;
        radius: string;
    }>({
        center: '',
        radius: '',
    });


    // State variables to hold necessary parameters for each shape
    const [lineParams, setLineParams] = useState<{ startPoint: string; endPoint: string }>({
        startPoint: '',
        endPoint: '',
    });
    const [circleParams, setCircleParams] = useState<{ center: string; radius: string }>({
        center: '',
        radius: '',
    });
    const [ellipseParams, setEllipseParams] = useState<{ center: string; majorAxis: string; minorAxis: string }>({
        center: '',
        majorAxis: '',
        minorAxis: '',
    });
    const [arcParams, setArcParams] = useState<{ center: string; radius: string; startAngle: string; endAngle: string }>({
        center: '',
        radius: '',
        startAngle: '',
        endAngle: '',
    });
    const [regularPolygonParams, setRegularPolygonParams] = useState<{
        center: string;
        radius: string;
        sides: string;
        angleOffset: string;
    }>({
        center: '',
        radius: '',
        sides: '',
        angleOffset: '',
    });
    const [irregularPolygonParams, setIrregularPolygonParams] = useState<{ vertices: string }>({
        vertices: '',
    });
    const [rectangleParams, setRectangleParams] = useState<{
        topLeft: string;
        bottomRight: string;
    }>({
        topLeft: '',
        bottomRight: '',
    });
    const [bezierCurveParams, setBezierCurveParams] = useState<{ controlPoints: string }>({
        controlPoints: '',
    });
    const [nurbsCurveParams, setNurbsCurveParams] = useState<{
        controlPoints: string;
        knotVector: string;
    }>({
        controlPoints: '',
        knotVector: '',
    });
    const [splineCurveParams, setSplineCurveParams] = useState<{ controlPoints: string }>({
        controlPoints: '',
    });
    const [circleParams2, setCircleParams2] = useState<{ center: string; radius: string }>({
        center: '',
        radius: '',
    });
    const [parabolaParams, setParabolaParams] = useState<{
        focus: string;
        vertex: string;
    }>({
        focus: '',
        vertex: '',
    });
    const [hyperbolaParams, setHyperbolaParams] = useState<{
        focus: string;
        vertex: string;
    }>({
        focus: '',
        vertex: '',
    });
    const [textParams, setTextParams] = useState<{ text: string; position: string }>({
        text: '',
        position: '',
    });
    const [dimensionLineParams, setDimensionLineParams] = useState<{
        startPoint: string;
        endPoint: string;
        dimensionValue: string;
    }>({
        startPoint: '',
        endPoint: '',
        dimensionValue: '',
    });
    const [polylineParams, setPolylineParams] = useState<{ vertices: string }>({
        vertices: '',
    });
    const [ellipticalArcParams, setEllipticalArcParams] = useState<{
        center: string;
        majorAxis: string;
        minorAxis: string;
        startAngle: string;
        endAngle: string;
    }>({
        center: '',
        majorAxis: '',
        minorAxis: '',
        startAngle: '',
        endAngle: '',
    });
    const [spiralParams, setSpiralParams] = useState<{
        center: string;
        startRadius: string;
        endRadius: string;
        numRotations: string;
        startAngle: string;
        endAngle: string;
    }>({
        center: '',
        startRadius: '',
        endRadius: '',
        numRotations: '',
        startAngle: '',
        endAngle: '',
    });
    const [curveParams, setCurveParams] = useState<{ controlPoints: string }>({
        controlPoints: '',
    });
    const [freehandDrawingParams, setFreehandDrawingParams] = useState<{ vertices: string }>({
        vertices: '',
    });
    const [cubeCurveParams, setCubeCurveParams] = useState<{
        controlPoints: string;
        cubeSize: string;
    }>({
        controlPoints: '',
        cubeSize: '',
    });
    const [wheelerCurveParams, setWheelerCurveParams] = useState<{ controlPoints: string }>({
        controlPoints: '',
    });
    const [cardioidKnotParams, setCardioidKnotParams] = useState<{
        center: string;
        innerRadius: string;
        outerRadius: string;
    }>({
        center: '',
        innerRadius: '',
        outerRadius: '',
    });
    const [segmentedCircleParams, setSegmentedCircleParams] = useState<{
        segments: string;
        center: string;
        radius: string;
    }>({
        segments: '',
        center: '',
        radius: '',
    });
    const [stephanoCurveParams, setStephanoCurveParams] = useState<{ controlPoints: string }>({
        controlPoints: '',
    });
    const getShapeParams = () => {
        switch (selectedShape) {
            case 'cube':
                return cubeParams;
            case 'sphere':
                return sphereParams;
            // Add cases for other shapes as needed
            default:
                return null;
        }
    };

    return (
        <div className="toolbox">
            <div className="tabs">
                <button className={currentTab === '3D' ? 'active' : ''} onClick={() => setCurrentTab('3D')}>
                    3D
                </button>
                <button className={currentTab === '2D' ? 'active' : ''} onClick={() => setCurrentTab('2D')}>
                    2D
                </button>
            </div>
            <div className="input-form">
                {currentTab === '3D' && (
                    <div className="drawing-tools">
                        {/* 3D shape creation buttons */}
                        <button onClick={() => setSelectedShape('cube')}>立方体</button>
                        <button onClick={() => setSelectedShape('sphere')}>球体</button>
                        {/* Add buttons for other 3D shapes as needed */}
                    </div>
                )}

                {selectedShape && (
                    <div className="dimension-tools">
                        {/* Input form for selected 3D shape */}
                        {/* Render input fields based on the selected shape */}
                        {/* Replace 'cubeParams' and 'sphereParams' with the corresponding state variables for each shape */}
                        {selectedShape === 'cube' && (
                            <div>
                                <input
                                    type="text"
                                    placeholder="Center Point (x,y,z)"
                                    value={cubeParams.center}
                                    onChange={(e) => setCubeParams({ ...cubeParams, center: e.target.value })}
                                />
                                <input
                                    type="text"
                                    placeholder="Width"
                                    value={cubeParams.width}
                                    onChange={(e) => setCubeParams({ ...cubeParams, width: e.target.value })}
                                />
                                <input
                                    type="text"
                                    placeholder="Height"
                                    value={cubeParams.height}
                                    onChange={(e) => setCubeParams({ ...cubeParams, height: e.target.value })}
                                />
                                <input
                                    type="text"
                                    placeholder="Depth"
                                    value={cubeParams.depth}
                                    onChange={(e) => setCubeParams({ ...cubeParams, depth: e.target.value })}
                                />
                            </div>
                        )}
                        {selectedShape === 'sphere' && (
                            <div>
                                <input
                                    type="text"
                                    placeholder="Center Point (x,y,z)"
                                    value={sphereParams.center}
                                    onChange={(e) => setSphereParams({ ...sphereParams, center: e.target.value })}
                                />
                                <input
                                    type="text"
                                    placeholder="Radius"
                                    value={sphereParams.radius}
                                    onChange={(e) => setSphereParams({ ...sphereParams, radius: e.target.value })}
                                />
                            </div>
                        )}
                        {/* Add input fields for other 3D shapes as needed */}
                    </div>
                )}
            </div>
            {currentTab === '2D' && (
                <div className="drawing-tools">
                    <button onClick={() => setSelectedShape('line')}>直線</button>
                    <button onClick={() => setSelectedShape('circle')}>円</button>
                    <button onClick={() => setSelectedShape('ellipse')}>楕円</button>
                    <button onClick={() => setSelectedShape('arc')}>円弧</button>
                    <button onClick={() => setSelectedShape('regular-polygon')}>正多角形</button>
                    <button onClick={() => setSelectedShape('irregular-polygon')}>不規則多角形</button>
                    <button onClick={() => setSelectedShape('rectangle')}>矩形</button>
                    <button onClick={() => setSelectedShape('bezier-curve')}>ベジェ曲線</button>
                    <button onClick={() => setSelectedShape('nurbs-curve')}>NURBS曲線</button>
                    <button onClick={() => setSelectedShape('spline-curve')}>スプライン曲線</button>
                    <button onClick={() => setSelectedShape('circle')}>サークル</button>
                    <button onClick={() => setSelectedShape('parabola')}>パラボラ</button>
                    <button onClick={() => setSelectedShape('hyperbola')}>ハイパボラ</button>
                    <button onClick={() => setSelectedShape('text')}>テキスト</button>
                    <button onClick={() => setSelectedShape('dimension-line')}>寸法線</button>
                    <button onClick={() => setSelectedShape('polyline')}>ポリライン</button>
                    <button onClick={() => setSelectedShape('elliptical-arc')}>楕円弧</button>
                    <button onClick={() => setSelectedShape('spiral')}>螺旋</button>
                    <button onClick={() => setSelectedShape('curve')}>曲線</button>
                    <button onClick={() => setSelectedShape('freehand-drawing')}>フリーハンド描画</button>
                    <button onClick={() => setSelectedShape('cube-curve')}>キューブ曲線</button>
                    <button onClick={() => setSelectedShape('wheeler-curve')}>ホイーラー曲線</button>
                    <button onClick={() => setSelectedShape('cardioid-knot')}>カーディオイドノット</button>
                    <button onClick={() => setSelectedShape('segmented-circle')}>セグメント付き円</button>
                    <button onClick={() => setSelectedShape('stephanos-curve')}>ステファン曲線</button>
                </div>
            )}

            {selectedShape && (
                <div className="dimension-tools">
                    {/* ...existing code... */}
                    {selectedShape === 'arc' && (
                        <div>
                            {/* Input form for arc */}
                            <input
                                type="text"
                                placeholder="Center Point (x,y)"
                                value={arcParams.center}
                                onChange={(e) => setArcParams({ ...arcParams, center: e.target.value })}
                            />
                            <input
                                type="text"
                                placeholder="Radius"
                                value={arcParams.radius}
                                onChange={(e) => setArcParams({ ...arcParams, radius: e.target.value })}
                            />
                            <input
                                type="text"
                                placeholder="Start Angle"
                                value={arcParams.startAngle}
                                onChange={(e) => setArcParams({ ...arcParams, startAngle: e.target.value })}
                            />
                            <input
                                type="text"
                                placeholder="End Angle"
                                value={arcParams.endAngle}
                                onChange={(e) => setArcParams({ ...arcParams, endAngle: e.target.value })}
                            />
                        </div>
                    )}
                    {selectedShape === 'regular-polygon' && (
                        <div>
                            {/* Input form for regular polygon */}
                            <input
                                type="text"
                                placeholder="Center Point (x,y)"
                                value={regularPolygonParams.center}
                                onChange={(e) => setRegularPolygonParams({ ...regularPolygonParams, center: e.target.value })}
                            />
                            <input
                                type="text"
                                placeholder="Radius"
                                value={regularPolygonParams.radius}
                                onChange={(e) => setRegularPolygonParams({ ...regularPolygonParams, radius: e.target.value })}
                            />
                            <input
                                type="text"
                                placeholder="Sides"
                                value={regularPolygonParams.sides}
                                onChange={(e) => setRegularPolygonParams({ ...regularPolygonParams, sides: e.target.value })}
                            />
                            <input
                                type="text"
                                placeholder="Angle Offset"
                                value={regularPolygonParams.angleOffset}
                                onChange={(e) => setRegularPolygonParams({ ...regularPolygonParams, angleOffset: e.target.value })}
                            />
                        </div>
                    )}
                    {selectedShape === 'irregular-polygon' && (
                        <div>
                            {/* Input form for irregular polygon */}
                            <input
                                type="text"
                                placeholder="Vertices (comma-separated x,y)"
                                value={irregularPolygonParams.vertices}
                                onChange={(e) => setIrregularPolygonParams({ ...irregularPolygonParams, vertices: e.target.value })}
                            />
                        </div>
                    )}
                    {selectedShape === 'rectangle' && (
                        <div>
                            {/* Input form for rectangle */}
                            <input
                                type="text"
                                placeholder="Top Left Point (x,y)"
                                value={rectangleParams.topLeft}
                                onChange={(e) => setRectangleParams({ ...rectangleParams, topLeft: e.target.value })}
                            />
                            <input
                                type="text"
                                placeholder="Bottom Right Point (x,y)"
                                value={rectangleParams.bottomRight}
                                onChange={(e) => setRectangleParams({ ...rectangleParams, bottomRight: e.target.value })}
                            />
                        </div>
                    )}
                    {selectedShape === 'bezier-curve' && (
                        <div>
                            {/* Input form for bezier curve */}
                            <input
                                type="text"
                                placeholder="Control Points (comma-separated x1,y1,x2,y2,...)"
                                value={bezierCurveParams.controlPoints}
                                onChange={(e) => setBezierCurveParams({ ...bezierCurveParams, controlPoints: e.target.value })}
                            />
                        </div>
                    )}
                    {selectedShape === 'nurbs-curve' && (
                        <div>
                            {/* Input form for NURBS curve */}
                            <input
                                type="text"
                                placeholder="Control Points (comma-separated x1,y1,x2,y2,...)"
                                value={nurbsCurveParams.controlPoints}
                                onChange={(e) => setNurbsCurveParams({ ...nurbsCurveParams, controlPoints: e.target.value })}
                            />
                            <input
                                type="text"
                                placeholder="Knot Vector (comma-separated values)"
                                value={nurbsCurveParams.knotVector}
                                onChange={(e) => setNurbsCurveParams({ ...nurbsCurveParams, knotVector: e.target.value })}
                            />
                        </div>
                    )}
                    {selectedShape === 'spline-curve' && (
                        <div>
                            {/* Input form for spline curve */}
                            <input
                                type="text"
                                placeholder="Control Points (comma-separated x1,y1,x2,y2,...)"
                                value={splineCurveParams.controlPoints}
                                onChange={(e) => setSplineCurveParams({ ...splineCurveParams, controlPoints: e.target.value })}
                            />
                        </div>
                    )}
                    {selectedShape === 'circle' && (
                        <div>
                            {/* Input form for circle (different from the previous circle) */}
                            <input
                                type="text"
                                placeholder="Center Point (x,y)"
                                value={circleParams2.center}
                                onChange={(e) => setCircleParams2({ ...circleParams2, center: e.target.value })}
                            />
                            <input
                                type="text"
                                placeholder="Radius"
                                value={circleParams2.radius}
                                onChange={(e) => setCircleParams2({ ...circleParams2, radius: e.target.value })}
                            />
                        </div>
                    )}
                    {selectedShape === 'parabola' && (
                        <div>
                            {/* Input form for parabola */}
                            <input
                                type="text"
                                placeholder="Focus Point (x,y)"
                                value={parabolaParams.focus}
                                onChange={(e) => setParabolaParams({ ...parabolaParams, focus: e.target.value })}
                            />
                            <input
                                type="text"
                                placeholder="Vertex Point (x,y)"
                                value={parabolaParams.vertex}
                                onChange={(e) => setParabolaParams({ ...parabolaParams, vertex: e.target.value })}
                            />
                        </div>
                    )}
                    {selectedShape === 'hyperbola' && (
                        <div>
                            {/* Input form for hyperbola */}
                            <input
                                type="text"
                                placeholder="Focus Point (x,y)"
                                value={hyperbolaParams.focus}
                                onChange={(e) => setHyperbolaParams({ ...hyperbolaParams, focus: e.target.value })}
                            />
                            <input
                                type="text"
                                placeholder="Vertex Point (x,y)"
                                value={hyperbolaParams.vertex}
                                onChange={(e) => setHyperbolaParams({ ...hyperbolaParams, vertex: e.target.value })}
                            />
                        </div>
                    )}
                    {selectedShape === 'text' && (
                        <div>
                            {/* Input form for text */}
                            <input
                                type="text"
                                placeholder="Text"
                                value={textParams.text}
                                onChange={(e) => setTextParams({ ...textParams, text: e.target.value })}
                            />
                            <input
                                type="text"
                                placeholder="Position (x,y)"
                                value={textParams.position}
                                onChange={(e) => setTextParams({ ...textParams, position: e.target.value })}
                            />
                        </div>
                    )}
                    {selectedShape === 'dimension-line' && (
                        <div>
                            {/* Input form for dimension line */}
                            <input
                                type="text"
                                placeholder="Start Point (x,y)"
                                value={dimensionLineParams.startPoint}
                                onChange={(e) => setDimensionLineParams({ ...dimensionLineParams, startPoint: e.target.value })}
                            />
                            <input
                                type="text"
                                placeholder="End Point (x,y)"
                                value={dimensionLineParams.endPoint}
                                onChange={(e) => setDimensionLineParams({ ...dimensionLineParams, endPoint: e.target.value })}
                            />
                            <input
                                type="text"
                                placeholder="Dimension Value"
                                value={dimensionLineParams.dimensionValue}
                                onChange={(e) => setDimensionLineParams({ ...dimensionLineParams, dimensionValue: e.target.value })}
                            />
                        </div>
                    )}
                    {selectedShape === 'polyline' && (
                        <div>
                            {/* Input form for polyline */}
                            <input
                                type="text"
                                placeholder="Vertices (comma-separated x1,y1,x2,y2,...)"
                                value={polylineParams.vertices}
                                onChange={(e) => setPolylineParams({ ...polylineParams, vertices: e.target.value })}
                            />
                        </div>
                    )}
                    {selectedShape === 'elliptical-arc' && (
                        <div>
                            {/* Input form for elliptical arc */}
                            <input
                                type="text"
                                placeholder="Center Point (x,y)"
                                value={ellipticalArcParams.center}
                                onChange={(e) => setEllipticalArcParams({ ...ellipticalArcParams, center: e.target.value })}
                            />
                            <input
                                type="text"
                                placeholder="Major Axis Length"
                                value={ellipticalArcParams.majorAxis}
                                onChange={(e) => setEllipticalArcParams({ ...ellipticalArcParams, majorAxis: e.target.value })}
                            />
                            <input
                                type="text"
                                placeholder="Minor Axis Length"
                                value={ellipticalArcParams.minorAxis}
                                onChange={(e) => setEllipticalArcParams({ ...ellipticalArcParams, minorAxis: e.target.value })}
                            />
                            <input
                                type="text"
                                placeholder="Start Angle"
                                value={ellipticalArcParams.startAngle}
                                onChange={(e) => setEllipticalArcParams({ ...ellipticalArcParams, startAngle: e.target.value })}
                            />
                            <input
                                type="text"
                                placeholder="End Angle"
                                value={ellipticalArcParams.endAngle}
                                onChange={(e) => setEllipticalArcParams({ ...ellipticalArcParams, endAngle: e.target.value })}
                            />
                        </div>
                    )}
                    {selectedShape === 'spiral' && (
                        <div>
                            {/* Input form for spiral */}
                            <input
                                type="text"
                                placeholder="Center Point (x,y)"
                                value={spiralParams.center}
                                onChange={(e) => setSpiralParams({ ...spiralParams, center: e.target.value })}
                            />
                            <input
                                type="text"
                                placeholder="Start Radius"
                                value={spiralParams.startRadius}
                                onChange={(e) => setSpiralParams({ ...spiralParams, startRadius: e.target.value })}
                            />
                            <input
                                type="text"
                                placeholder="End Radius"
                                value={spiralParams.endRadius}
                                onChange={(e) => setSpiralParams({ ...spiralParams, endRadius: e.target.value })}
                            />
                            <input
                                type="text"
                                placeholder="Number of Rotations"
                                value={spiralParams.numRotations}
                                onChange={(e) => setSpiralParams({ ...spiralParams, numRotations: e.target.value })}
                            />
                            <input
                                type="text"
                                placeholder="Start Angle"
                                value={spiralParams.startAngle}
                                onChange={(e) => setSpiralParams({ ...spiralParams, startAngle: e.target.value })}
                            />
                            <input
                                type="text"
                                placeholder="End Angle"
                                value={spiralParams.endAngle}
                                onChange={(e) => setSpiralParams({ ...spiralParams, endAngle: e.target.value })}
                            />
                        </div>
                    )}
                    {selectedShape === 'curve' && (
                        <div>
                            {/* Input form for curve */}
                            <input
                                type="text"
                                placeholder="Control Points (comma-separated x1,y1,x2,y2,...)"
                                value={curveParams.controlPoints}
                                onChange={(e) => setCurveParams({ ...curveParams, controlPoints: e.target.value })}
                            />
                        </div>
                    )}
                    {selectedShape === 'freehand-drawing' && (
                        <div>
                            {/* Input form for freehand drawing */}
                            <input
                                type="text"
                                placeholder="Vertices (comma-separated x1,y1,x2,y2,...)"
                                value={freehandDrawingParams.vertices}
                                onChange={(e) => setFreehandDrawingParams({ ...freehandDrawingParams, vertices: e.target.value })}
                            />
                        </div>
                    )}
                    {selectedShape === 'cube-curve' && (
                        <div>
                            {/* Input form for cube curve */}
                            <input
                                type="text"
                                placeholder="Control Points (comma-separated x1,y1,x2,y2,...)"
                                value={cubeCurveParams.controlPoints}
                                onChange={(e) => setCubeCurveParams({ ...cubeCurveParams, controlPoints: e.target.value })}
                            />
                            <input
                                type="text"
                                placeholder="Cube Size"
                                value={cubeCurveParams.cubeSize}
                                onChange={(e) => setCubeCurveParams({ ...cubeCurveParams, cubeSize: e.target.value })}
                            />
                        </div>
                    )}
                    {selectedShape === 'wheeler-curve' && (
                        <div>
                            {/* Input form for wheeler curve */}
                            <input
                                type="text"
                                placeholder="Control Points (comma-separated x1,y1,x2,y2,...)"
                                value={wheelerCurveParams.controlPoints}
                                onChange={(e) => setWheelerCurveParams({ ...wheelerCurveParams, controlPoints: e.target.value })}
                            />
                        </div>
                    )}
                    {selectedShape === 'cardioid-knot' && (
                        <div>
                            {/* Input form for cardioid knot */}
                            <input
                                type="text"
                                placeholder="Center Point (x,y)"
                                value={cardioidKnotParams.center}
                                onChange={(e) => setCardioidKnotParams({ ...cardioidKnotParams, center: e.target.value })}
                            />
                            <input
                                type="text"
                                placeholder="Inner Radius"
                                value={cardioidKnotParams.innerRadius}
                                onChange={(e) => setCardioidKnotParams({ ...cardioidKnotParams, innerRadius: e.target.value })}
                            />
                            <input
                                type="text"
                                placeholder="Outer Radius"
                                value={cardioidKnotParams.outerRadius}
                                onChange={(e) => setCardioidKnotParams({ ...cardioidKnotParams, outerRadius: e.target.value })}
                            />
                        </div>
                    )}
                    {selectedShape === 'segmented-circle' && (
                        <div>
                            {/* Input form for segmented circle */}
                            <input
                                type="text"
                                placeholder="Segments"
                                value={segmentedCircleParams.segments}
                                onChange={(e) => setSegmentedCircleParams({ ...segmentedCircleParams, segments: e.target.value })}
                            />
                            <input
                                type="text"
                                placeholder="Center Point (x,y)"
                                value={segmentedCircleParams.center}
                                onChange={(e) => setSegmentedCircleParams({ ...segmentedCircleParams, center: e.target.value })}
                            />
                            <input
                                type="text"
                                placeholder="Radius"
                                value={segmentedCircleParams.radius}
                                onChange={(e) => setSegmentedCircleParams({ ...segmentedCircleParams, radius: e.target.value })}
                            />
                        </div>
                    )}
                    {selectedShape === 'stephanos-curve' && (
                        <div>
                            {/* Input form for stephanos curve */}
                            <input
                                type="text"
                                placeholder="Control Points (comma-separated x1,y1,x2,y2,...)"
                                value={stephanoCurveParams.controlPoints}
                                onChange={(e) => setStephanoCurveParams({ ...stephanoCurveParams, controlPoints: e.target.value })}
                            />
                        </div>
                    )}
                </div>
            )}

            <ShapePreview selectedShape={selectedShape} shapeParams={getShapeParams()} />
        </div>
    );
};

export default ShapeCreation;