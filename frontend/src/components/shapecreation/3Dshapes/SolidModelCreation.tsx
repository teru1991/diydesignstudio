import React, { useState } from 'react';
import CubeCreation from './CubeCreation';
import SphereCreation from './SphereCreation';

interface SolidModelCreationProps {
    onCreate: (shapes: React.ReactNode[]) => void;
}

const SolidModelCreation: React.FC<SolidModelCreationProps> = ({ onCreate }) => {
    const [shapes, setShapes] = useState<React.ReactNode[]>([]);

    const handleCreate = () => {
        onCreate(shapes);
    };

    return (
        <div>
            <h3>ソリッドモデル</h3>
            {/* For example, buttons to add Cube, Sphere, Cylinder, Cone, etc. */}
            <button onClick={() => setShapes([...shapes, <CubeCreation onCreate={onCreate} />])}>Add Cube</button>
            <button onClick={() => setShapes([...shapes, <SphereCreation onCreate={onCreate} />])}>Add Sphere</button>
            {/* Add more shape creation components as needed */}
            <button onClick={handleCreate}>作成</button>
        </div>
    );
};

export default SolidModelCreation;
