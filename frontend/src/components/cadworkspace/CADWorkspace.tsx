import React, {Component, useCallback, useState} from 'react';
import DrawingCanvas from "../drawingcanvas/DrawingCanvas";
import ViewingCanvas, {ViewingCanvasProps, ViewShape} from "../viewingcanvas/ViewingCanvas"; // Make sure to import the correct props type
import CustomizableToolbar from "../customizabletoolbar/CustomizableToolbar";
import LayerManager from "../layer/layermanager/LayerManager";
import PartManager from "../parts/partmanager/PartManager";
import DirectoryTree from "../treenode/TreeNode";
import useDraggable from "../../helpers/useDraggable";

interface CADShape {
    id: string;
    name: string;
    // ... other shape properties
}

interface CADWorkspaceState {
    canvases: JSX.Element[];
    activeCanvas: number;
    selectedShape: CADShape | null;
    shapes: CADShape[];
}

interface CADWorkspaceProps {
    // Define your props here
}

const CADWorkspace: React.FC<CADWorkspaceProps> = () => {
    const [canvases, setCanvases] = useState<JSX.Element[]>([<DrawingCanvas />]);
    const [activeCanvas, setActiveCanvas] = useState<number>(0);
    const [selectedShape, setSelectedShape] = useState<CADShape | null>(null);
    const [shapes, setShapes] = useState<CADShape[]>([
        { id: '1', name: 'Shape1' },
        { id: '2', name: 'Shape2' },
        // ... other shapes
    ]);

    const handleShapeSelect = useCallback((shape: CADShape) => {
        // Handle shape selection logic
    }, []);

    const handleShapeNameChange = useCallback((index: number, newName: string) => {
        const newShapes = [...shapes];
        newShapes[index].name = newName;
        setShapes(newShapes);
    }, [shapes]);

    const { position, handleMouseDown } = useDraggable();

    return (
        <div className='cad-workspace'>
            <CustomizableToolbar />
            <div className="canvas-container">
                {canvases[activeCanvas]}
                <ViewingCanvas
                    onShapeSelect={(shape: ViewShape) => {
                        const cadShape: CADShape = {
                            id: 'some-id', // You'll need to determine how to get this id
                            name: shape.name,
                        };
                        handleShapeSelect(cadShape);
                    }}
                    modelData={{ shapes: shapes }}
                />
            </div>
            <LayerManager />
            <PartManager />
            <div
                className="draggable-directory-tree"
                style={{ left: position.x, top: position.y }}
                onMouseDown={handleMouseDown}
            >
                <DirectoryTree shapes={shapes} onShapeNameChange={handleShapeNameChange} />
            </div>
        </div>
    );
}

export default CADWorkspace;