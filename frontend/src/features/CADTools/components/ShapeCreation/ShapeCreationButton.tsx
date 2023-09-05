import React, { useState } from 'react';
import Modal from "../../../../shared/components/Modal";
import ShapeBuilder from "../ShapeBuilder";

const ShapeCreationButton: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setIsOpen(true)}>図形の作成</button>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <ShapeBuilder />
            </Modal>
        </div>
    );
};

export default ShapeCreationButton;
