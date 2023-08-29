import React, { useState } from 'react';
import Modal from "../modal/Modal";
import ShapeCreationWrapper from "../shapecreationwrapper/ShapeCreationWrapper";

const ShapeCreationButton: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setIsOpen(true)}>図形の作成</button>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <ShapeCreationWrapper />
            </Modal>
        </div>
    );
};

export default ShapeCreationButton;
