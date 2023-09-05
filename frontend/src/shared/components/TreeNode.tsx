import React, { useState } from 'react';

interface TreeNodeProps {
    name: string;
    onNameChange: (newName: string) => void;
}

const TreeNode: React.FC<TreeNodeProps> = ({ name, onNameChange }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(name);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        onNameChange(editedName);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setEditedName(name);
        setIsEditing(false);
    };

    return (
        <div>
            {isEditing ? (
                <>
                    <input value={editedName} onChange={e => setEditedName(e.target.value)} />
                    <button onClick={handleSave}>保存</button>
                    <button onClick={handleCancel}>キャンセル</button>
                </>
            ) : (
                <>
                    <span onClick={handleEdit}>{name}</span>
                </>
            )}
        </div>
    );
};

interface Shape {
    name: string;
    // other properties
}

interface DirectoryTreeProps {
    shapes: Shape[];
    onShapeNameChange: (index: number, newName: string) => void;
}

const DirectoryTree: React.FC<DirectoryTreeProps> = ({ shapes, onShapeNameChange }) => {
    return (
        <div className="directory-tree">
            {shapes.map((shape, index) => (
                <TreeNode key={index} name={shape.name} onNameChange={(newName) => onShapeNameChange(index, newName)} />
            ))}
        </div>
    );
};

export default DirectoryTree;
