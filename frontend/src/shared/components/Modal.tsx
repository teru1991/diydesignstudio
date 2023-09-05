import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
        }}>
            <div style={{
                backgroundColor: '#FFF',
                padding: '20px',
                borderRadius: '8px',
                width: '80%',
                maxHeight: '80%',
                overflowY: 'auto'
            }}>
                {children}
                <button onClick={onClose} style={{ marginTop: '20px' }}>閉じる</button>
            </div>
        </div>
    );
};

export default Modal;
