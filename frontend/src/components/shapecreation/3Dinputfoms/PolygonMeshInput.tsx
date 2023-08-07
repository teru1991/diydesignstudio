import React from 'react';

interface PolygonMeshInputProps {
    vertices: number[][];
    polygons: number[][];
}

const PolygonMeshInput: React.FC<PolygonMeshInputProps> = ({ vertices, polygons }) => {
    return (
        <div>
            <h3>メッシュ</h3>
            <div>Vertices:</div>
            {/* Display vertices */}
            {vertices.map((vertex, index) => (
                <div key={index}>Vertex {index + 1}: {vertex[0]}, {vertex[1]}, {vertex[2]}</div>
            ))}
            <hr />
            <div>Polygons:</div>
            {/* Display polygons */}
            {polygons.map((polygon, index) => (
                <div key={index}>Polygon {index + 1}: {polygon[0]}, {polygon[1]}, {polygon[2]}</div>
            ))}
        </div>
    );
};

export default PolygonMeshInput;
