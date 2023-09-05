import React from 'react';

const withScroll = (WrappedComponent: React.ComponentType<any>) => {
    return (props: any) => {
        return (
            <div style={{ overflow: 'auto', maxHeight: '400px', maxWidth: '600px' }}>
        <WrappedComponent {...props} />
        </div>
    );
    };
};

export default withScroll;
