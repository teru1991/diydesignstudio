import React from 'react';
import FreeHandToolbar from './FreeHandToolbar';
import FreeHandDrawingArea from './FreeHandDrawingArea';
import ConfirmDrawingButton from './ConfirmDrawingButton';

const FreeHandDrawingWindow: React.FC = () => {
    return (
        <div className="free-hand-window">
            <FreeHandToolbar/>
            <FreeHandDrawingArea/>
            <ConfirmDrawingButton/>
        </div>
    );
};

export default FreeHandDrawingWindow;
